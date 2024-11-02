import React from "react";
import { useSelector } from "react-redux";
import "./contentStyles.css";

export default function Content({ apikey }) {
  const { loading, data, error } = useSelector((state) => state.dataState);

  if (loading) return <p className="infotext">Loading...</p>;
  if (error) return <p className="infotext">Error: {error}</p>;
  if (!data || Object.keys(data).length === 0)
    return <p className="infotext">No data available</p>;

  return (
    <div className="container mt-3 form-control">
      <div>
        <span className="content-badge badge text-bg-primary">{apikey}</span>
      </div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
