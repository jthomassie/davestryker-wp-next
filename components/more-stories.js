// components/more-stories.js

import FeaturedPost from "../components/featured-post";
import MailchimpForm from "../components/mailchimp-form";

const MoreStories = ({ posts }) => {
  return (
    <div id="news" className="container">
      <div className="row">
        {/*  */}
        <MailchimpForm />
        {/*  */}
        <div className="col-12">
          <h5 className="h5-caps mb-4">Recent news posts</h5>
        </div>
      </div>

      <div className="row">
        {/*  */}
        {posts.map(({ node }, i) => (
          <FeaturedPost
            key={i}
            index={i + 1}
            title={node.title}
            featuredImage={node.featuredImage}
            date={node.date}
            author={node.author}
            slug={node.slug}
            content={node.content}
          />
        ))}
      </div>
    </div>
  );
};
export default MoreStories;
