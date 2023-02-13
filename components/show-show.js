// components/show-show.js

import { useGetPosts } from "../components/useRequest";

const ShowShow = ({ show, key }) => {
  //
  const { posts, error } = useGetPosts("/api/allshows?lastdate=2023-03-17");

  //
  return (
    <>
      <div className="row" key={key}>
        {/* date/times */}
        <div className="col-12">
          <div className="shows-date">{show.date1}</div>
          {show.date2 !== "" && <div className="shows-date">{show.date2}</div>}
        </div>
        {/* venue */}
        <div className="col-5">
          <div className="shows-venue">
            <a href={`${show.website}`}>{show.venue}</a>
          </div>
          {show.address1 !== "" && (
            <div className="shows-p">{show.address1}</div>
          )}
          {show.address2 !== "" && (
            <div className="shows-p">{show.address2}</div>
          )}
          {show.phone !== "" && <div className="shows-p">{show.phone}</div>}
        </div>
        {/* group */}
        <div className="col-5">
          <div className="shows-group">{show.group}</div>
          {show.musician1 !== "" && (
            <div className="shows-p">{show.musician1}</div>
          )}
          {show.musician2 !== "" && (
            <div className="shows-p">{show.musician2}</div>
          )}
          {show.musician3 !== "" && (
            <div className="shows-p">{show.musician3}</div>
          )}
          {show.musician4 !== "" && (
            <div className="shows-p">{show.musician4}</div>
          )}
          {show.musician5 !== "" && (
            <div className="shows-p">{show.musician5}</div>
          )}
          {show.musician6 !== "" && (
            <div className="shows-p">{show.musician6}</div>
          )}
        </div>
        {/* edit btns */}
        <div className="col-2">
          <div className="d-grid gap-0">
            <button
              type="button"
              id="edit"
              data-id={show._id}
              onClick={(e) => {
                editShow(e);
              }}
              className="btn btn-sm btn-secondary m-1"
            >
              Edit
            </button>
            <button
              type="button"
              id="delete"
              data-id={show._id}
              onClick={(e) => {
                deleteShow(e);
              }}
              className="btn btn-sm btn-secondary m-1"
            >
              Delete
            </button>
            <button
              type="button"
              id="copy"
              data-id={show._id}
              onClick={(e) => {
                copyShow(e);
              }}
              className="btn btn-sm btn-secondary m-1"
            >
              Copy
            </button>
          </div>
        </div>

        {/*  */}
        <div className="col-12">
          <hr />
        </div>
      </div>
    </>
  );
};

export default ShowShow;
