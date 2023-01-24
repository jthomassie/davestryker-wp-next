// pages/shows.js

//
import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import NavbarRb from "../components/navbar";
import Icons from "../components/icons";
//
import Avatar from "../components/avatar";
import ShowsClean from "../components/shows-clean";
import { getPageName } from "../lib/api";

//
const Shows = ({ pageName: { edges } }) => {
  // console.log("edges", edges);
  const shows = edges.filter((o) => o.node.title == "Shows-live");
  let node = shows[0].node;
  console.log("Shows page", node);

  //
  return (
    <>
      <Layout>
        <Head>
          <title>Dave Stryker</title>
        </Head>
        <Container>
          <Intro />
          <NavbarRb activeKey="/shows#content" />
          <div className="anchor" id="content" />
          <Icons />
          {/*  */}
          <div className="mt-3 mb-6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-4">Shows</h1>
                </div>
                <hr className="mb-4" />
                <Avatar
                  author={node.author}
                  date={node.date}
                  className="d-inline p-2"
                />
                <ShowsClean content={node.content} />
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

//
export const getStaticProps = async () => {
  const pageName = await getPageName();
  //
  return {
    props: { pageName },
    revalidate: 10,
  };
};

export default Shows;
