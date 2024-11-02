import React from "react";
import { useDispatch } from "react-redux";
import { clearData } from "../redux/actions/dataActions";

export default function Footer() {
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearData());
  };

  return (
    <footer className="container mt-3">
      <button className="btn btn-danger" onClick={handleClear}>
        Clear Data
      </button>
    </footer>
  );
}
