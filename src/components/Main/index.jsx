import React, { useState } from "react";
import SearchBar from "../SearchBar/index";
import Table from "../Table/index";

const Main = () => {
  const [keyword, setKeyWord] = useState("");

  const handleOnChange = (result) => {
    setKeyWord(result);
  };

  return (
    <React.Fragment>
      <SearchBar handleOnChange={handleOnChange} />
      <Table keyword={keyword} />
    </React.Fragment>
  );
};

export default Main;
