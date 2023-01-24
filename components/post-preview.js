// components/post-preview.js

import Avatar from "./avatar";
import CoverImage from "./cover-image";
import Link from "next/link";

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  id,
  width,
  height,
}) => {
  return (
    <div className="col-12 col-md-6 col-xl-4">
      <div className="mb-3">
        {coverImage && (
          <CoverImage
            title={title}
            coverImage={coverImage}
            slug={slug}
            width={coverImage.node.mediaDetails.width}
            height={coverImage.node.mediaDetails.height}
          />
        )}
      </div>
      <h4 className="">
        <Link href={`/posts/${slug}`}>
          <div
            className="hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></div>
        </Link>
      </h4>
      <Avatar author={author} date={date} />
      <div className="mb-3" dangerouslySetInnerHTML={{ __html: excerpt }} />
      <hr className="my-6" />
    </div>
  );
};

export default PostPreview;
