import React from "react";
//import ReactDOM from "react-dom/client";
import "./contentStyles.css";

export default () => {
  return (
    <>
      <div className="container mt-3 form-control">
        <div>
          <span className="content-badge badge text-bg-primary">People</span>
          <span className="content-badge badge text-bg-primary">1</span>
        </div>
        <span className="content-text">"name": "Luke Skywalker",</span>
      </div>
    </>
  );
};
