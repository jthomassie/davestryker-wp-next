// pages/_app.js

import "../styles/global-vars.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
//
import { useEffect } from "react";
//
const App = ({ Component, pageProps }) => {
  //
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  //
  return <Component {...pageProps} />;
};

export default App;
