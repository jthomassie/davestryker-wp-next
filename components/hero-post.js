// components/hero-post.js

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Link from "next/link";

const HeroPost = ({ title, featuredImage, date, content, author, slug }) => {
  //
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h6 className="h5-caps mb-4">Featured news post</h6>
            <h2 dangerouslySetInnerHTML={{ __html: title }} />
            <Avatar author={author} date={date} />
            <div className="container">
              <div className="row">
                <div className="col-12 px-0">
                  <div className="col-5 col-lg-6 float-end mt-1 ms-4 mb-4">
                    <CoverImage
                      title={title}
                      coverImage={featuredImage}
                      slug={slug}
                      width={featuredImage.node.mediaDetails.width}
                      height={featuredImage.node.mediaDetails.height}
                    />
                  </div>
                  <div
                    className="mb-3"
                    dangerouslySetInnerHTML={{ __html: content }}
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 mb-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroPost;
