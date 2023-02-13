// pages/_app.js

import Head from "next/head";
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
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Dave Stryker" />
        <meta name="robots" content="all" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta name="google" content="notranslate" key="notranslate" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
