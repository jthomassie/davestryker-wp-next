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
                      <ShowShow
                        id={d._id}
                        date1={d.date1}
                        date2={d.date2}
                        lastdate={d.lastdate}
                        venue={d.venue}
                        website={d.website}
                        address1={d.address1}
                        address2={d.address2}
                        phone={d.phone}
                        group={d.group}
                        musician1={d.musician1}
                        musician2={d.musician2}
                        musician3={d.musician3}
                        musician4={d.musician4}
                        musician5={d.musician5}
                        musician6={d.musician6}
                      />
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
