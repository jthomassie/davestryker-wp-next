// pages/index.js

// import { useEffect } from "react";
// import { GetStaticProps } from "next";
import { getAllPostsForHome } from "../lib/api";
//
import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import NavbarRb from "../components/navbar";
import Icons from "../components/icons";
//
import MoreStories from "../components/more-stories";
import FeaturedPost from "../components/featured-post-test";

//
const Index = ({ allPosts: { edges } }) => {
  //
  const allPosts = edges;
  allPosts.forEach((o) => {
    let categs = [];
    o.node.categories.edges.forEach((n) => {
      categs.push(n.node.name);
    });
    o.node.cats = categs;
    return o;
  });

  const featuredPost = allPosts.find((o) => {
    return o.node.cats.indexOf("Featured") !== -1;
  }).node;

  const morePosts = allPosts.filter((o) => {
    return o.node.cats.indexOf("Featured") == -1;
  });

  //
  return (
    <>
      <Layout>
        <Head>
          <title>Dave Stryker - News</title>
        </Head>
        <Container>
          <Intro />
          <NavbarRb activeKey="/" />
          <Icons />
          {/*  */}
          {featuredPost && (
            <FeaturedPost
              index={0}
              title={featuredPost.title}
              featuredImage={featuredPost.featuredImage}
              date={featuredPost.date}
              author={featuredPost.author}
              slug={featuredPost.slug}
              content={featuredPost.content}
            />
          )}
          {/*  */}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

//
export const getStaticProps = async () => {
  const allPosts = await getAllPostsForHome();
  //
  return {
    props: { allPosts },
    revalidate: 10,
  };
};

export default Index;
