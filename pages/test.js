// pages/test.js

//
import ShowForm from "../components/show-form";

//
const Test = () => {
  //
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col lt-bg px-5 py-3">
            <h1 className="m-0 mb-2">Add show</h1>
            <ShowForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;
