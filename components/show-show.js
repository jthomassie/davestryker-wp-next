// components/show-show.js

import { useGetPosts } from "../components/useRequest";
import { useRouter } from "next/router";
import Link from "next/link";

//
const ShowShow = ({
  id,
  date1,
  date2,
  lastdate,
  venue,
  website,
  address1,
  address2,
  phone,
  group,
  musician1,
  musician2,
  musician3,
  musician4,
  musician5,
  musician6,
}) => {
  //
  const { posts, error } = useGetPosts("/api/allshows?lastdate=2023-03-17");
  //
  const router = useRouter();

  // edit show
  const editShow = (e) => {
    console.log("editShow", e);
  };

  // delete show
  const deleteShow = async (postId) => {
    // change deleting state
    console.log("deleteShow", postId);
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
      return router.push(router.asPath);
    } catch (error) {
      // stop deleting state
      return setDeleting(false);
    }
  };

  // copy show
  const copyShow = async (e, post) => {
    console.log("copyShow", post, e, router);
  };

  //
  return (
    <>
      <div className="row">
        {/* date/times */}
        <div className="col-12">
          <div className="shows-date">{date1}</div>
          {date2 !== "" && <div className="shows-date">{date2}</div>}
          {lastdate !== "" && <div className="shows-p">{lastdate}</div>}
        </div>
        {/* venue */}
        <div className="col-5">
          <div className="shows-venue">
            <a href={`${website}`}>{venue}</a>
          </div>
          {address1 !== "" && <div className="shows-p">{address1}</div>}
          {address2 !== "" && <div className="shows-p">{address2}</div>}
          {phone !== "" && <div className="shows-p">{phone}</div>}
        </div>
        {/* group */}
        <div className="col-5">
          <div className="shows-group">{group}</div>
          {musician1 !== "" && <div className="shows-p">{musician1}</div>}
          {musician2 !== "" && <div className="shows-p">{musician2}</div>}
          {musician3 !== "" && <div className="shows-p">{musician3}</div>}
          {musician4 !== "" && <div className="shows-p">{musician4}</div>}
          {musician5 !== "" && <div className="shows-p">{musician5}</div>}
          {musician6 !== "" && <div className="shows-p">{musician6}</div>}
        </div>
        {/* edit btns */}
        <div className="col-2">
          <div className="d-grid gap-0">
            <button
              type="button"
              id="edit"
              data-id={id}
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
              data-id={id}
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
              data-id={id}
              onClick={(e) => {
                copyShow(e);
              }}
              className="btn btn-sm btn-secondary m-1"
            >
              Copy
            </button>

            <Link
              href={{
                pathname: "/add-show",
                query: {
                  id: id,
                  date1: date1,
                  date2: date2,
                  lastdate: lastdate,
                  venue: venue,
                  website: website,
                  address1: address1,
                  address2: address2,
                  phone: phone,
                  group: group,
                  musician1: musician1,
                  musician2: musician2,
                  musician3: musician3,
                  musician4: musician4,
                  musician5: musician5,
                  musician6: musician6,
                },
              }}
            >
              Copy show
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

export default ShowShow;
