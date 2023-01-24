// pages/contact.js

//

import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import NavbarRb from "../components/navbar";
import Icons from "../components/icons";
//

//
const Contact = () => {
  //
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
                  <h1 className="display-4">Contact</h1>
                </div>
                <form
                  action="mailto:jthomassie1@gmail.com"
                  method="get"
                  enctype="text/plain"
                >
                  <div>
                    <label for="name">
                      Name:
                      <input type="text" name="name" id="name" />
                    </label>
                  </div>
                  <div>
                    <label for="email">
                      Email:
                      <input type="text" name="email" id="email" />
                    </label>
                  </div>
                  <div>
                    <label>Comments:</label>
                    <br />
                    <textarea name="comments" rows="12" cols="35">
                      Send your comments to us.
                    </textarea>
                  </div>
                  <div>
                    <input type="submit" name="submit" value="Send" />
                    <input type="reset" name="reset" value="Clear Form" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
