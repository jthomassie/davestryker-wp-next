// components/featured-post-test.js

import Avatar from "./avatar";
import CoverImage from "./cover-image";

//
const isEven = (n) => {
  return n % 2 == 0 ? true : false;
};

//
const FeaturedPost = ({
  index,
  title,
  featuredImage,
  date,
  content,
  author,
  slug,
}) => {
  //
  if (isEven(index)) {
    return (
      <>
        <div className="container">
          <div className="row">
            {/* full width */}
            <div className="col-12">
              {index == 0 && <h1 dangerouslySetInnerHTML={{ __html: title }} />}
              {index !== 0 && (
                <h3 dangerouslySetInnerHTML={{ __html: title }} />
              )}
              <Avatar author={author} date={date} />
            </div>
            {/* left col story */}
            <div className="col-12">
              <div className="col-5 float-end mt-2 ms-4 mb-3">
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

            {/* full width */}
            <div className="col-12">
              <hr className="mt-6 mb-6" />
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {/* full width */}
          <div className="col-12">
            {index == 0 && <h1 dangerouslySetInnerHTML={{ __html: title }} />}
            {index !== 0 && <h3 dangerouslySetInnerHTML={{ __html: title }} />}
            <Avatar author={author} date={date} />
          </div>
          {/* left col story */}
          <div className="col-12 x-0">
            <div className="col-5 float-start mt-2 me-4 mb-3">
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
          {/* full width */}
          <div className="col-12">
            <hr className="mt-6 mb-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPost;
