// components/copyright.js

import { format } from "date-fns";

//
const Copyright = () => {
  const date = new Date();
  return <div>© {format(date, "yyyy")} Dave Stryker • All rights reserved</div>;
};

//
export default Copyright;
