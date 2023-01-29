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
                <Link href="/">Home •</Link>
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
                <Link href="/media"> Media kit </Link>
              </li>
            </ul>
          </div>
          {/* copyright */}
          <div className="col-12">
            <Copyright />
          </div>
          {/* strikezone logo */}
          <div className="col pt-3 opacity-75">
            <Link
              href="https://www.strikezonerecords.com"
              target="_blank"
              passHref
            >
              <Image
                src={strikezone}
                alt="Strikezone Records logo"
                width={145}
                height={81}
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
