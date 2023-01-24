// pages/biography

//
import { getPostsAndPages } from "../lib/api";
//
// import Head from "next/head";
// import Container from "../components/container";
// import Intro from "../components/intro";
// import Layout from "../components/layout";
// import NavbarRb from "../components/navbar";
// import Icons from "../components/icons";
// import BiographyPg from "../components/BiographyPg";

//
const Query = ({ postsAndPages }) => {
  const postsData = postsAndPages.posts.edges;
  const pagesData = postsAndPages.pages.edges;
  //
  let prettyPosts = JSON.stringify(postsData, null, " ");
  prettyPosts = prettyPosts.replace(/\\n/g, "");
  let prettyPages = JSON.stringify(pagesData, null, " ");
  prettyPages = prettyPages.replace(/\\n/g, "");
  //
  console.log("postsData", postsData);
  console.log("pagesData", pagesData);

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Posts Data</h1>
            <div class="out nowrap mt-3 mb-6">{prettyPosts}</div>
          </div>
          <div class="col-12">
            <h1>Pages Data</h1>
            <div class="out nowrap mt-3 mb-6">{prettyPages}</div>
          </div>
        </div>
      </div>
    </>
  );
};

//
export const getStaticProps = async () => {
  const postsAndPages = await getPostsAndPages();
  //
  return {
    props: { postsAndPages },
    revalidate: 10,
  };
};

export default Query;
