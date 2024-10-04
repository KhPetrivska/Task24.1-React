import React from "react";
import Bootstrap from "bootstrap";
import "./searchBarStyles.css";

export default () => {
  return (
    <>
      <div className="search-bar-container container mt-3s">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon3">
            https://swapi.dev/api/
          </span>
          <input
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3 basic-addon4"
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Get info
          </button>
        </div>
      </div>
    </>
  );
};
