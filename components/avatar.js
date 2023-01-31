// components/avatar.js

import Image from "next/image";
import { parseISO, format } from "date-fns";

//
const Avatar = ({ date, author }) => {
  const isAuthorHaveFullName =
    author?.node?.firstName && author?.node?.lastName;
  const name = isAuthorHaveFullName
    ? `${author.node.firstName} ${author.node.lastName}`
    : author.node.name || null;
  const date1 = parseISO(date);
  const date2 = format(date1, "LLL	d, yyyy");

  //
  return (
    <div className=" mb-4">
      <div className="d-flex align-items-center">
        <Image
          src={author.node.avatar.url}
          width={45}
          height={45}
          className="avatar rounded-circle me-2"
          alt={name}
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className="small-caps">
          By {name} • {date2}
        </div>
      </div>
    </div>
  );
};

export default Avatar;
