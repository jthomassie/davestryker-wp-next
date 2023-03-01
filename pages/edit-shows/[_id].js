// // pages/edit-shows/[_id].js

// import useSWR from "swr";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

// // generates `/posts/1` and `/posts/2`
// export async function getStaticPaths() {
//   return {
//     paths: [
//       { params: { _id: "63dea1098f417f928f275583" } },
//       { params: { _id: "63dea1098f417f928f275584" } },
//     ],
//     fallback: false, // can also be true or 'blocking'
//   };
// }

// // `getStaticPaths` requires using `getStaticProps`
// export async function getStaticProps({ params }) {
//   const res = await fetch(`http://localhost:3000/api/shows/${params}`);
//   const post = await res.json();

//   return {
//     // Passed to the page component as props
//     props: { post: {} },
//   };
// }

// const Post = ({ post }) => {
//   console.log(post);
//   return <p>{post._id}</p>;
// };

// export default Post;
