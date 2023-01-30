// components/intro.js

import Link from "next/link";
import Image from "next/image";
import cover from "../public/cover6-dave-stryker.jpg";
import strikezone from "../public/strikezone-logo-white-sm.png";

const Intro = () => {
  return (
    <>
      <div className="container-fluid baseline">
        <div className="row">
          <div className="col-12 px-0">
            <div className="position-relative">
              {/* cover image */}
              <Image
                src={cover}
                alt="Dave Stryker cover photo"
                width={2000}
                height={750}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                }}
              />
              {/* strikezone logo */}
              <div className="img-overlay-logo w-100">
                <div className="container">
                  <div className="row">
                    <div className="col-3 offset-9 pt-3 pt-md-4 opacity-75 text-right">
                      <Link
                        href="https://www.strikezonerecords.com"
                        target="_blank"
                        passHref
                      >
                        <Image
                          src={strikezone}
                          alt="Strikezone Records logo"
                          width={290}
                          height={162}
                          style={{
                            maxWidth: "100%",
                            height: "auto",
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* title */}
              <div className="img-overlay-title w-100 pb-2">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h1 className="display-2 mb-1 type-shadow">
                        Dave Stryker
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Intro;
