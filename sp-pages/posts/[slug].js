// pages/posts/[sluh].js

// import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import Container from "../../components/container";
import PostBody from "../../components/post-body";
// import MoreStories from "../../components/more-stories";
import Header from "../../components/header";
// import PostHeader from "../../components/post-header";
// import SectionSeparator from "../../components/section-separator";
import Layout from "../../components/layout";
// import PostTitle from "../../components/post-title";
// import Tags from "../../components/tags";
import { getAllPostsWithSlug, getPostAndMorePosts } from "../../lib/api";

//
const Post = ({ post, posts }) => {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  //
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <>{/* <PostTitle>Loading…</PostTitle> */}</>
        ) : (
          <>
            <article>
              <Head>
                <title>{post.title}</title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.sourceUrl}
                />
              </Head>
              {/* <PostHeader
                title={post.title}
                coverImage={post.featuredImage}
                date={post.date}
                author={post.author}
                categories={post.categories}
              /> */}
              <PostBody content={post.content} />
              {/* <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer> */}
            </article>

            {/* <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />} */}
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

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
