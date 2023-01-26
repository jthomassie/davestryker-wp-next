// pages/music.js

// import { useEffect } from "react";
// import { GetStaticProps } from "next";
// import { getAllProducts } from "../lib/api";
//
import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import NavbarRb from "../components/navbar";
import Icons from "../components/icons";
//
import ProductCard from "../components/product-card";

//
const Music = () => {
  // music data
  let items = [
    {
      title: "Prime",
      year: "2023",
      label: "Strikezone Records",
      sku: "8823",
      img: "/Prime-1024x933.jpg",
      uri: "album/prime",
      types: "CD, MP3",
    },
    {
      title: "As We Are",
      year: "2022",
      label: "Strikezone Records",
      sku: "8822",
      img: "/as_we_are_1200x1200.jpg",
      uri: "album/as-we-are",
      types: "CD, Vinyl, MP3",
    },
    {
      title: "Baker's Circle",
      year: "2021",
      label: "Strikezone Records",
      sku: "8821",
      img: "/Bakers-Circle-1024x914.jpg",
      uri: "album/bakers-circle",
      types: "CD",
    },
    {
      title: "Blue Soul",
      year: "2020",
      label: "Strikezone Records",
      sku: "8820",
      img: "/Blue-Soul-1024x899.jpg",
      uri: "album/blue-soul",
      types: "CD",
    },
    {
      title: "Eight Track Christmas",
      year: "2019",
      label: "Strikezone Records",
      sku: "8819",
      img: "/Eight-Track-Christmas-1024x907.jpg",
      uri: "album/eight-track-christmas",
      types: "CD",
    },
    {
      title: "Eight Track III",
      year: "2019",
      label: "Strikezone Records",
      sku: "8818",
      img: "/Eight-Track-III-1024x921.jpg",
      uri: "album/eight-track-iii",
      types: "CD",
    },
    {
      title: "Strykin' Ahead",
      year: "2017",
      label: "Strikezone Records",
      sku: "8815",
      img: "/Strykin-Ahead-1024x915.jpg",
      uri: "album/strykin-ahead",
      types: "CD",
    },
    {
      title: "Eight Track II",
      year: "2016",
      label: "Strikezone Records",
      sku: "8814",
      img: "/Eight-Track-II-1024x918.jpg",
      uri: "album/eight-track-iii",
      types: "CD",
    },
    {
      title: "Messin' with Mister T",
      year: "2015",
      label: "Strikezone Records",
      sku: "8812",
      img: "/messin-1200x1030.jpg",
      uri: "album/messin-with-mister-t",
      types: "CD",
    },
    {
      title: "Eight Track",
      year: "2014",
      label: "Strikezone Records",
      sku: "8809",
      img: "/eight-track-1196x2000.jpg",
      uri: "album/eight-track",
      types: "CD",
    },
    {
      title: "Six String Santa",
      year: "1996",
      label: "Strikezone Records",
      sku: "8806",
      img: "/six-string-santa-700x700.jpg",
      uri: "album/six-string-santa",
      types: "",
    },
    {
      title: "The Guitar Artistry of Billy Rogers",
      year: "1993",
      label: "Strikezone Records",
      sku: "8808A",
      img: "/the-guitar-artistry-of-billy-rogers-700x700.jpg",
      uri: "album/the-guitar-artistry-of-billy-rogers",
      types: "CD",
    },
    {
      title: "Guitar On Top",
      year: "1991",
      label: "Strikezone Records",
      sku: "8805",
      img: "/guitar-on-top-700x700.jpg",
      uri: "album/guitar-on-top",
      types: "CD",
    },
    {
      title: "First Strike",
      year: "1988",
      label: "Someday",
      sku: "1011",
      img: "/first-strike-700x700.jpg",
      uri: "album/first-strike",
      types: "CD",
    },
    {
      title: "Dave Stryker's Jazz Guitar Improvisation Method Vol III",
      year: "2022",
      label: "Strikezone",
      sku: "9898",
      img: "/jazz-guitar-improvisation-method-vol-iii-964x1248.jpg",
      uri: "merch/dave-strykers-jazz-guitar-improvisation-method-vol-iii",
      types: "Book",
    },
  ];
  //
  return (
    <>
      <Layout>
        <Head>
          <title>Dave Stryker - Music</title>
        </Head>
        <Container>
          <Intro />
          <NavbarRb activeKey="/music" />
          <div className="anchor" id="content" />
          <Icons />
          {/*  */}
          <div className="mt-3 mb-6">
            <div className="container">
              <div className="row gx-5">
                <div className="col-12">
                  <h1 className="display-4">Music</h1>
                  <hr className="mt-4 mb-4" />
                </div>
              </div>
              {/*  */}
              <div className="row">
                {items.map((node) => (
                  <div className="col-6 col-md-4 col-lg-3" key={node.sku}>
                    <ProductCard
                      name={node.title}
                      featuredimage={node.img}
                      width={1050}
                      height={1000}
                      sku={node.sku}
                      year={node.year}
                      label={node.label}
                      uri={node.uri}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Music;
