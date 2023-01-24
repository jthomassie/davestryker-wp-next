// components/layout.js

import Footer from "./footer";
import Meta from "./meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
