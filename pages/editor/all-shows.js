// pages/editor/all-shows.js

import useSWR from "swr";
import EditShow from "../../components/edit-show";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllShows = () => {
  const { data, error } = useSWR("/api/shows", fetcher);
  //
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  //
  return (
    <>
      <div className="blue-base">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-10 mt-5">
              <h2>Shows editor</h2>
              <div className="my-2">
                <hr />
              </div>
              {/*  */}
              {data.shows.length === 0 ? (
                <h3>No shows</h3>
              ) : (
                <ul className="list-unstyled">
                  {data.shows.map((show, i) => (
                    <EditShow show={show} key={i} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllShows;
