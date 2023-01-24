// components/cover-image.js

import Image from "next/image";

//
const CoverImage = ({ title, coverImage, slug, width, height }) => {
  return (
    <div className="cover-img">
      <Image
        src={coverImage?.node.sourceUrl}
        alt={`Cover image for ${title}`}
        width={width}
        height={height}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default CoverImage;
