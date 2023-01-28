// components/media-card.js

import Image from "next/image";

const MediaCard = ({ name, path, type }) => {
  return (
    <div>
      {/* card */}
      <div className="card lt-blue mb-4">
        <div className="card-body">
          <div className="media-card mb-3">
            <span>
              <i
                className="bi bi-filetype-pdf bids-md pe-2"
                title="Pdf file"
              ></i>
            </span>
            {path}
          </div>
          <a
            href={`/${path}`}
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

export default MediaCard;
