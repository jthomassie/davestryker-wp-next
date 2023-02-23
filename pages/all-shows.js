// pages/all-shows.js

import useSWR from "swr";
import ShowShow from "../components/show-show";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const AllShows = () => {
  const { data, error } = useSWR("/api/shows", fetcher);
  console.log(data);
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
              {/*  */}
              <ul className="list-unstyled">
                {data.shows &&
                  data.shows.map((d) => (
                    //
                    <li key={d._id}>
                      <ShowShow show={d} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllShows;