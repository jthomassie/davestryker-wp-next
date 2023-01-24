// components/post-body.js

const PostBody = ({ content }) => {
  return (
    <>
      <div className="mb-3" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
};

export default PostBody;
