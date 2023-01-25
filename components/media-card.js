// components/media-card.js

import Image from "next/image";

const MediaCard = ({ name, image, credit, type, width, height, uri }) => {
  return (
    <div>
      {/* card */}
      <div className="card lt-blue mb-3">
        <Image
          alt={`Media image of ${name}`}
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
          <div className="media-card mb-3">
            Hi-res photo of {name} by {credit}.
          </div>

          <a
            href={image}
            className="btn btn-primary btn-sm"
            rel="noreferrer"
            download
          >
            Download {type}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
