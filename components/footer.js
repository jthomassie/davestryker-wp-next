// components/footer.js

import Link from "next/link";
import Copyright from "./copyright";
import Image from "next/image";
import strikezone from "../public/strikezone-logo-white-sm.png";

//
const Footer = () => {
  return (
    <footer className="pt-6 pb-9">
      <div className="container">
        <div className="row">
          {/* nav */}
          <div className="col-12">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link href="/">News •</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/shows"> Shows •</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/music"> Music •</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/biography"> Biography •</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/media"> Media kit</Link>
              </li>
            </ul>
          </div>
          {/* copyright */}
          <div className="col-12">
            <Copyright />
          </div>
          {/* design credit */}
          <div className="col-12">
            <p>
              Site design by{" "}
              <a
                href="https://www.data-visual.net/"
                target="_blank"
                rel="noreferrer"
              >
                Data-Visual
              </a>
            </p>
          </div>
          {/* strikezone logo */}
          <div className="col-5 col-md-4 pt-4 opacity-75 text-shadow">
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
    </footer>
  );
};

//
export default Footer;
