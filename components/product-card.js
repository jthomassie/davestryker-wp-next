// components/ProductPreview.jsx

import Image from "next/image";

const ProductPreview = ({
  name,
  image,
  width,
  height,
  sku,
  year,
  label,
  types,
  uri,
}) => {
  return (
    <div>
      {/* card */}
      <div className="card lt-blue mb-3">
        <Image
          alt={`Cover image for ${name}`}
          src={image}
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
          <p className="card-text small-type m-0 mb-2">
            {year} • {label} {sku}
          </p>
          <p className="bold m-0 mb-2">{types}</p>
          <a
            href={`https://davestryker.bandcamp.com/${uri}`}
            target="_blank"
            className="btn btn-primary btn-sm"
            rel="noreferrer"
          >
            Buy it now
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
