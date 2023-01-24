// pages/media.js

//
import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import NavbarRb from "../components/navbar";
import Icons from "../components/icons";
//

//
const Media = () => {
  //
  return (
    <>
      <Layout>
        <Head>
          <title>Dave Stryker</title>
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
                <div className="col-4">
                  <a href="/images/myw3schoolsimage.jpg" download>
                    <img src="/images/myw3schoolsimage.jpg" alt="W3Schools" />
                  </a>
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
