// components/BiographyPg.js

import Avatar from "./avatar";
import Image from "next/image";
// import CoverImage from "./cover-image";
import davevert from "../public/dave-vertical-654x853.jpg";

//
const BiographyPg = ({ id, title, date, author, content }) => {
  // console.log("BiographyPg", id, title, date, author);

  //
  return (
    <div>
      <hr className="mb-4" />
      <Avatar author={author} date={date} className="d-inline p-2" />
      <div className="col-5 col-lg-4 float-end mt-1 ms-4 mb-4cover-img">
        <Image
          src={davevert}
          alt={`Dave Stryker`}
          width={654}
          height={853}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </div>
      <div
        className="mb-6 biography-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <hr className="mr-75pct" />
    </div>
  );
};

export default BiographyPg;
