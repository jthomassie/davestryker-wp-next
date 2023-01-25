// components/more-stories.js

import PostPreview from "./post-preview";

const MoreStories = ({ posts }) => {
  return (
    <div id="news" className="container">
      <div className="row">
        <div className="col-12">
          <h5 className="h5-caps mb-4">Recent news posts</h5>
        </div>
      </div>

      <div className="row">
        {posts.map(({ node }) => (
          <PostPreview
            key={node.slug}
            title={node.title}
            coverImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slugid={node.id}
            slug={node.slug}
            excerpt={node.excerpt}
            content={node.content}
            width={2000}
            height={1300}
          />
        ))}
      </div>
    </div>
  );
};
export default MoreStories;
