// components/layout.js

import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <>
      <div className="">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};
export default Layout;
