// components/shows-clean.js

import _ from "lodash";

//
const cleanHtml = (str) => {
  let editContent = JSON.stringify(str, null, "");
  editContent = editContent.replace(/\\n/g, "");
  editContent = editContent.replace(
    /<h5>/,
    '<div class="row"><div class="col-12"><h5 class="show-date">'
  );
  editContent = editContent.replace(
    /<hr class=\\"wp-block-separator has-alpha-channel-opacity\\"\/>/g,
    "<hr>"
  );
  editContent = editContent.replace(
    /<hr><h5>/g,
    '</div><div class="col-12"><hr></div></div><div class="row"><div class="col-12"><h5 class="show-date">'
  );
  editContent = editContent.replace(/rel=\\"noreferrer noopener\\"/g, "");
  editContent = editContent.replace(
    /<p class=\\"has-medium-font-size\\">/g,
    "<p>"
  );
  editContent = editContent.replace(
    /<\/h5><h5>/g,
    '</h5></div><div class="col-6 col-sm-5 col-md-4"><h5 class="show-venue">'
  );
  editContent = editContent.replace(
    /<\/p><h4>/g,
    '</p></div><div class="col-6 col-sm-7 col-md-8"><h4>'
  );
  editContent = editContent.replace(
    /<\/p><hr>/g,
    '</p></div><div class="col-12"><hr></div></div>'
  );
  editContent = _.trimStart(editContent, '"');
  editContent = _.trimEnd(editContent, '"');
  return editContent;
};

//
const ShowsPg = ({ content }) => {
  let editContent = cleanHtml(content);
  //
  return (
    <div
      className="mb-6 shows-content"
      dangerouslySetInnerHTML={{ __html: editContent }}
    ></div>
  );
};

export default ShowsPg;
