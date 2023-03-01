// components/edit-show.js

import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";

//
const EditShow = ({ show }) => {
  //
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  // delete show
  const deleteShow = async (postId) => {
    // change deleting state
    setDeleting(true);
    try {
      // delete post
      await fetch("/api/shows", {
        method: "DELETE",
        body: postId,
      });
      // reset deleting state
      setDeleting(false);
      // reload page
      return router.replace(router.asPath).then(() => router.reload());
    } catch (error) {
      // stop deleting state
      return setDeleting(false);
    }
  };

  //
  return (
    <>
      <div className="row">
        {/* date/times */}
        <div className="col-12">
          <div className="shows-date">{show.date1}</div>
          {show.date2 !== "" && <div className="shows-date">{show.date2}</div>}
          {show.lastdate !== "" && (
            <div className="shows-p">( {show.lastdate} )</div>
          )}
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
        {/* edit buttons */}
        <div className="col-2">
          <div className="d-grid gap-0">
            {/*  */}
            <button
              type="button"
              className="btn btn-sm btn-secondary m-1"
              onClick={() => {
                console.log("deleteShow", show._id);
                deleteShow(show._id);
              }}
            >
              {deleting ? "Deleting" : "Delete"}
            </button>
            {/*  */}
            <Link
              href={{
                pathname: "/editor/add-show",
                query: show,
              }}
              legacyBehavior
              scroll={false}
            >
              <button
                type="button"
                id="copy-show"
                className="btn btn-sm btn-secondary m-1"
              >
                Copy
              </button>
            </Link>
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

export default EditShow;
