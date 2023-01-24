// components/icons.js

import Link from "next/link";

const Icons = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col d-flex mt-3 mb-5">
            {/* youtube */}
            <Link
              href="https://www.youtube.com/channel/UCcw_YHERNG4oXUva0xzw7Yw"
              target="_blank"
              passHref
            >
              <i className="bi bi-youtube bids float-left" title="Youtube"></i>
            </Link>
            {/* facebook */}
            <Link
              href="https://www.facebook.com/davestrykerguitar"
              target="_blank"
              passHref
            >
              <i
                className="bi bi-facebook bids float-left"
                title="Facebook"
              ></i>
            </Link>
            {/* instagram */}
            <Link
              href="https://www.instagram.com/dave.stryker/?hl=en"
              target="_blank"
              passHref
            >
              <i
                className="bi bi-instagram bids float-left"
                title="Instagram"
              ></i>
            </Link>
            {/* twitter */}
            <Link
              href="https://twitter.com/dave_stryker"
              target="_blank"
              passHref
            >
              <i className="bi bi-twitter bids float-left" title="Twitter"></i>
            </Link>
            {/* email */}
            <Link
              target="_blank"
              href="mailto:davestryker@me.com?subject=[website]&body=[website message]"
            >
              <i
                className="bi bi-envelope bids float-left"
                title="Email me"
              ></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Icons;
