// pages/media.js

//
import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import NavbarRb from "../components/navbar";
import Icons from "../components/icons";
//
import MediaCard from "../components/media-card";
import MediaCardImg from "../components/media-card-img";
//
const Media = () => {
  let files = [
    {
      name: "Dave Stryker full biography",
      path: "dave-stryker-full-biography.pdf",
      type: "pdf",
    },
    {
      name: "Dave Stryker short biography",
      path: "dave-stryker-short-bio-2023.pdf",
      type: "pdf",
    },
    {
      name: "Dave Stryker discography",
      path: "dave-stryker-discography-2023.pdf",
      type: "pdf",
    },
  ];

  let images = [
    {
      name: "Dave Stryker",
      path: "/dave-stryker-media-1.jpg",
      credit: "Chris Drukker",
      type: "jpg",
    },
    {
      name: "Dave Stryker",
      path: "/dave-stryker-media-3.jpg",
      credit: "Chris Drukker",
      type: "jpg",
    },
    {
      name: "Dave Stryker",
      path: "/dave-stryker-media-5.jpg",
      credit: "Bob McClenahan",
      type: "jpg",
    },
    {
      name: "Dave Stryker",
      path: "/dave-stryker-media-2.jpg",
      credit: "Chris Drukker",
      type: "jpg",
    },
    {
      name: "Dave Stryker",
      path: "/dave-stryker-media-4.jpg",
      credit: "Steven Peterson",
      type: "jpg",
    },
    {
      name: "Dave Stryker Trio",
      path: "/dave-stryker-trio-1.jpg",
      credit: "Chris Drukker",
      type: "jpg",
    },
    {
      name: "Dave Stryker Trio",
      path: "/dave-stryker-trio-2.jpg",
      credit: "Chris Drukker",
      type: "jpg",
    },
  ];

  return (
    <>
      <Layout>
        <Head>
          <title>Dave Stryker - Media kit</title>
        </Head>
        <Container>
          <Intro />
          <NavbarRb activeKey="/media" />
          <div className="anchor" id="content" />
          <Icons />
          {/*  */}
          <div className="mt-3 mb-6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-4">Media kit</h1>
                  <hr className="mb-4" />
                </div>
                <div className="col-12">
                  <p className="">
                    Files selected will be downloaded to the default Downloads
                    folder on your Mac or PC.
                  </p>
                </div>
                {/* file cards */}
                {files.map((node, i) => (
                  <div className="col-6 col-md-4 col-lg-3" key={`pdf-${i}`}>
                    <MediaCard
                      key={`pdf-${i}`}
                      name={node.path}
                      path={node.path}
                      type={node.type}
                    />
                  </div>
                ))}
                {/* image cards */}
                {images.map((node, i) => (
                  <div className="col-6 col-md-4 col-lg-3" key={`img-${i}`}>
                    <MediaCardImg
                      key={`img-${i}`}
                      name={node.name}
                      path={node.path}
                      credit={node.credit}
                      type={node.type}
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

export default Media;
