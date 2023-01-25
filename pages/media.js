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
//
const Media = () => {
  let recordings = [
    {
      name: "Dave Stryker",
      img: "/dave-stryker-media-1.jpg",
      credit: "Chris Drukker",
      type: "jpg",
    },
    {
      name: "Dave Stryker",
      img: "/dave-stryker-media-2.jpg",
      credit: "Chris Drukker",
      type: "jpg",
    },
    {
      name: "Dave Stryker",
      img: "/dave-stryker-media-3.jpg",
      credit: "Chris Drukker",
      type: "jpg",
    },
    {
      name: "Dave Stryker",
      img: "/dave-stryker-media-4.jpg",
      credit: "Steven Peterson",
      type: "jpg",
    },
    {
      name: "Dave Stryker",
      img: "/dave-stryker-media-5.jpg",
      credit: "Bob McClenahan",
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
          <NavbarRb activeKey="/media#content" />
          <div className="anchor" id="content" />
          <Icons />
          {/*  */}
          <div className="mt-3 mb-6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-4">Media kit</h1>
                  <hr class="mb-4" />
                </div>
                {/*  */}
                <div className="row">
                  {recordings.map((node) => (
                    <>
                      <div className="col-6 col-md-4 col-lg-3" key={node.sku}>
                        <MediaCard
                          name={node.name}
                          image={node.img}
                          credit={node.credit}
                          type={node.type}
                          width={1050}
                          height={1000}
                        />
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Media;
