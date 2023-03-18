// pages/_app.js

import Head from "next/head";
import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { Roboto } from "next/font/google";
import { Roboto_Slab } from "next/font/google";
import "../styles/global-vars.scss";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
//
const robotoFont = Roboto({
  weight: ["400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--robotoFont",
  fallback: ["sans-serif"],
});
const robotoSlabFont = Roboto_Slab({
  weight: ["400", "500"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--robotoSlabFont",
  fallback: ["serif"],
});
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

        <meta name="og:url" content="https://www.davestryker.com/" />
        <meta name="og:title" content="Dave Stryker - News" />
        <meta
          name="og:description"
          content="Hi friends! Dave Stryker here. Welcome to my new website. We made it easier to find my Music and to purchase CDs, vinyl, books, etc."
        />
        <meta
          name="og:image"
          content="https://www.davestryker.net/blog/wp-content/uploads/new-website-screengrab-1.jpg"
        />
        <meta name="og:image:alt" content="Dave Stryker cover photo" />
      </Head>
      <style jsx global>{`
        html {
          font-family: ${robotoFont.style.fontFamily};
        }
        .wp-block-quote,
        blockquote {
          font-family: ${robotoSlabFont.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
};

export default App;
