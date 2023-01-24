// components/ProductPreview.jsx

import Image from "next/image";

const ProductPreview = ({
  name,
  featuredimage,
  width,
  height,
  sku,
  year,
  label,
  uri,
}) => {
  return (
    <div>
      {/* card */}
      <div className="card lt-blue mb-3">
        <Image
          alt={`Cover image for ${name}`}
          src={featuredimage}
          width={width}
          height={height}
          className="card-img-top"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className="card-body">
          <h1 className="display-6 cd-name card-title">{name}</h1>
          <p className="card-text small-type">
            {year} • {label} {sku}
          </p>
          <a
            href={`https://davestryker.bandcamp.com/album/${uri}`}
            target="_blank"
            className="btn btn-primary btn-sm"
            rel="noreferrer"
          >
            Buy it now
          </a>
        </div>
      </div>
      {/* 
      <h1 className="display-6 cd-name mt-3 mb-3 p-0">{name}</h1>
      <div className="mb-3">
        {featuredimage && (
          <ProductImage
            title={name}
            coverImage={featuredimage}
            width={width}
            height={height}
          />
        )}
      </div>
      <div className="small-type">
        {year} • {label} ({sku})
      </div>
      <hr />  */}
    </div>
  );
};

export default ProductPreview;
