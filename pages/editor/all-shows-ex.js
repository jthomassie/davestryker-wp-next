// pages/editor/all-posts-ex.js

import ShowShow from "../../components/show-show";

export default function AllShows({ shows }) {
  return (
    <>
      <div className="blue-base">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 mt-5">
              {shows && shows.length === 0 ? (
                <h2>No added posts</h2>
              ) : (
                <ul>
                  {shows.map((show) => (
                    <ShowShow show={show} key={show.id} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  // get the current environment
  let dev = process.env.NODE_ENV !== "production";
  let { DEV_URL, PROD_URL } = process.env;

  // request posts from api
  let response = await fetch(`${dev ? DEV_URL : PROD_URL}/api/shows`);
  // extract the data
  let data = await response.json();

  return {
    props: {
      shows: data["shows"],
    },
  };
}
