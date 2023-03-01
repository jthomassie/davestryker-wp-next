// pages/shows-list.js

//
import Head from "next/head";
import Container from "../components/container";
import Intro from "../components/intro";
import Layout from "../components/layout";
import NavbarRb from "../components/navbar";
import Icons from "../components/icons";
import ShowShow from "../components/show-show";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Shows = () => {
  const { data, error } = useSWR("/api/shows", fetcher);
  //
  return (
    <>
      <Layout>
        <Head>
          <title>Dave Stryker - Shows</title>
        </Head>
        <Container>
          <Intro />
          <NavbarRb activeKey="/shows" />
          <div className="anchor" id="content" />
          <Icons />
          {/*  */}
          <div className="mt-3 pb-6">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1 className="display-4">Shows</h1>
                  <hr className="my-4" />
                  {/*  */}
                  {error ? <p>Failed to load</p> : null}
                  {!data ? (
                    <p>Loading...</p>
                  ) : data.shows.length === 0 ? (
                    <h2>No added posts</h2>
                  ) : (
                    <ul className="list-unstyled">
                      {data.shows.map((show, i) => (
                        <ShowShow show={show} key={i} />
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
};

export default Shows;
