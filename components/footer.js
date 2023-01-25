// components/footer.js

import Copyright from "./copyright";

//
const Footer = () => {
  return (
    <footer className="pt-6 pb-9">
      <div className="container">
        <div className="row">
          <div className="col">
            <Copyright />
          </div>
        </div>
      </div>
    </footer>
  );
};

//
export default Footer;
