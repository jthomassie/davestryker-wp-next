// pages/index.js

// import { useEffect } from "react";
// import { GetStaticProps } from "next";
//
import { postsData } from "../data/posts-pages";
// import { getAllPostsForHome } from "../lib/api";
//
import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import NavbarRb from "../components/navbar";
import Icons from "../components/icons";
//
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";

//
const Index = () => {
  //
  const allPosts = postsData;
  allPosts.forEach((o) => {
    let categs = [];
    o.node.categories.edges.forEach((n) => {
      categs.push(n.node.name);
    });
    o.node.cats = categs;
    return o;
  });
  //
  const featuredPost = allPosts.find((o) => {
    return o.node.cats.indexOf("Featured") !== -1;
  }).node;
  console.log("featuredPost", featuredPost);
  //
  const morePosts = allPosts.filter((o) => {
    return o.node.cats.indexOf("Featured") == -1;
  });
  console.log("morePosts", morePosts);

  //
  return (
    <>
      <Layout>
        <Head>
          <title>Dave Stryker</title>
        </Head>
        <Container>
          <Intro />
          <NavbarRb activeKey="/#top" />
          <div className="anchor" id="news" />
          <Icons />
          {featuredPost && (
            <HeroPost
              title={featuredPost.title}
              featuredImage={featuredPost.featuredImage}
              date={featuredPost.date}
              author={featuredPost.author}
              slug={featuredPost.slug}
              content={featuredPost.content}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;
