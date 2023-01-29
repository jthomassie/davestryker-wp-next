// components/BiographyPg.js

import Image from "next/image";
import davevert from "../public/dave-vertical-654x853.jpg";

//
const BiographyPg = ({ id, title, date, author, content }) => {
  //
  return (
    <>
      <div className="col-5 col-lg-4 float-end mt-1 ms-4 mb-4 cover-img">
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
    </>
  );
};

export default BiographyPg;
