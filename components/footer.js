// components/footer.js

import Link from "next/link";
import Nav from "react-bootstrap/Nav";
import Copyright from "./copyright";

//
const Footer = () => {
  return (
    <footer className="pt-6 pb-9">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Copyright />
          </div>
          <div className="col-12">
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link href="/">Home</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/shows">Shows</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/music">Music</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/biography">Biography</Link>
              </li>
              <li className="list-inline-item">
                <Link href="/media">Media kit</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

//
export default Footer;
