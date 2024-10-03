import React from "react";
import ReactDOM from "react-dom/client";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";

export default () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>SWAPI</h1>
      <SearchBar />
      <Content />
    </div>
  );
};
