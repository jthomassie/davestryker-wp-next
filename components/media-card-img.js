// components/media-card-img.js

import Image from "next/image";

const MediaCardImg = ({ name, path, credit, type }) => {
  return (
    <div>
      {/* card */}
      <div className="card lt-blue mb-4 type-shadow">
        <Image
          alt={`Media image of ${name}`}
          src={path}
          width={200}
          height={200}
          className="card-img-top"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className="card-body">
          <div className="media-card mb-3">
            Hi-res photo of {name} by {credit}
          </div>

          <a
            href={path}
            className="btn btn-primary btn-sm"
            rel="noreferrer"
            download
          >
            <span>
              <i
                className="bi bi-file-earmark-arrow-down-fill bids-sm pe-1"
                title="Download"
              ></i>
            </span>
            Download {type}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaCardImg;
