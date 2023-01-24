// components/product-image.js

import Image from "next/image";
import Link from "next/link";

//
const ProductImage = ({ title, coverImage, slug, width, height }) => {
  const image = (
    <Image
      alt={`Cover image for ${title}`}
      src={coverImage}
      width={width}
      height={height}
      style={{
        maxWidth: "100%",
        height: "auto",
      }}
    />
  );
  return (
    <div className="cover-img pb-n2 m-0">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default ProductImage;
