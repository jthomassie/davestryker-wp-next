// pages/biography

//
import { getPageName } from "../lib/api";
//
import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import NavbarRb from "../components/navbar";
import Icons from "../components/icons";
//
import BiographyContent from "../components/biography-content";

//
const Biography = ({ pageName: { edges } }) => {
  // console.log("edges", edges);
  const bio = edges.filter((o) => o.node.title == "Biography-live");
  let node = bio[0].node;
  // console.log("Biography page", node);

  return (
    <>
      <Layout>
        <Head>
          <title>Dave Stryker</title>
        </Head>
        <Container>
          <Intro />
          <NavbarRb activeKey="/biography#content" />
          <div className="anchor" id="content" />

          <Icons />
          {/*  */}
          <div className="mt-3 mb-6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-4">Biography</h1>
                </div>
                <div className="row">
                  <div className="col">
                    <BiographyContent
                      id={node.id}
                      title={node.title}
                      date={node.date}
                      author={node.author}
                      content={node.content}
                    />
                  </div>
                </div>
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

export default Biography;
