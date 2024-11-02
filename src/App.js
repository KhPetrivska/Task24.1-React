import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import Content from "./components/Content";
import Footer from "./components/Footer.js";

const App = () => {
  const [apikey, setApikey] = useState('people/1');

  return (
    <div>
      <SearchBar apikey={apikey} setApikey={setApikey} />
      <Content apikey={apikey} />
      <Footer/>
    </div>
  );
};

export default App;
