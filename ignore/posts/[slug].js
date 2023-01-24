// pages/posts/[id].js

//
import Head from "next/head";
import Container from "../../components/container";
import Intro from "../../components/intro";
import Layout from "../../components/layout";
import NavbarRb from "../../components/navbar";
import Icons from "../../components/icons";
//
import ShowsPg from "../../components/ShowsPg";
import { getAllPostsWithId, getPostId } from "../../lib/api";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

//
const Post = ({ post, posts }) => {
  // const router = useRouter();
  const morePosts = posts?.edges;

  // if (!router.isFallback && !post?.slug) {
  //   return <ErrorPage statusCode={404} />;
  // }
  // const shows = edges.filter((o) => o.node.title == "Shows-live");
  // let node = shows[0].node;
  console.log("Shows post", post, posts);

  //
  return (
    <>
      {/*  
      <Layout>
        <Head>
          <title>Dave Stryker</title>
        </Head>
        <Container>
          <Intro />
          <NavbarRb activeKey="/shows#content" />
          <div className="anchor" id="content" />
          <Icons />
          <div className="mt-3 mb-6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-4">Post</h1>
                </div>
                <div className="row">
                  <div className="col">
                    {/* <ShowsPg
                      id={node.id}
                      title={node.title}
                      date={node.date}
                      author={node.author}
                      content={node.content}
                    /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
  */}
    </>
  );
};

// {
/*}
export const getStaticProps = async ({ params, previewData }) => {
  const data = await getPostId(params?.id);
  //
  return {
    props: {
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithId();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};
*/
// }

export const getStaticProps = async ({ params, previewData }) => {
  const data = await getPostAndMorePosts(params?.slug, previewData);
  //
  return {
    props: {
      post: data.post,
      posts: data.posts,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths: allPosts.edges.map(({ node }) => `/posts/${node.slug}`) || [],
    fallback: true,
  };
};

export default Post;
