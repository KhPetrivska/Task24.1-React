import React from "react";
import "./searchBarStyles.css";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/dataActions";

const SearchBar = ({ apikey, setApikey }) => {
  const dispatch = useDispatch();
  const [inputApiKey, setInputApiKey] = React.useState(apikey);

  const handleFetch = (e) => {
    e.preventDefault();
    dispatch(fetchData(inputApiKey));
    setInputApiKey("");
    setApikey(inputApiKey);
  };

  React.useEffect(() => {
    setInputApiKey(apikey);
  }, [apikey]);

  return (
    <div className="search-bar-container container mt-3">
      <div className="input-group">
        <span className="input-group-text" id="basic-addon3">
          https://swapi.dev/api/
        </span>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3 basic-addon4"
          value={inputApiKey}
          onChange={(e) => setInputApiKey(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleFetch}
        >
          Get info
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
