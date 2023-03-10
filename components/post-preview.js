// components/post-preview.js

import Avatar from "./avatar";
import CoverImage from "./cover-image";
// import Link from "next/link";

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  content,
  author,
  slug,
  id,
  width,
  height,
}) => {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div className="mb-4">
        {coverImage && (
          <div className="cover-img">
            <CoverImage
              title={title}
              coverImage={coverImage}
              slug={slug}
              width={coverImage.node.mediaDetails.width}
              height={coverImage.node.mediaDetails.height}
            />
          </div>
        )}
      </div>
      <h4 className="">
        {/* <Link href={`/posts/${slug}`}> */}
        <div
          // className="hover:underline"
          dangerouslySetInnerHTML={{ __html: title }}
        ></div>
        {/* </Link> */}
      </h4>
      <Avatar author={author} date={date} />
      <div className="mb-3" dangerouslySetInnerHTML={{ __html: content }} />
      <hr className="my-6" />
    </div>
  );
};

export default PostPreview;
