// components/show-show.js

const ShowShow = ({ show }) => {
  //
  return (
    <li className="mt-2">
      <div className="row">
        {/* date/times */}
        <div className="col-12 mb-2">
          <div className="shows-date">{show.date1}</div>
          {show.date2 !== "" && <div className="shows-date">{show.date2}</div>}
        </div>
        {/* venue */}
        <div className="col-4">
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
        <div className="col-8">
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

        {/*  */}
        <div className="col-12 mt-3">
          <hr />
        </div>
      </div>
    </li>
  );
};

export default ShowShow;
