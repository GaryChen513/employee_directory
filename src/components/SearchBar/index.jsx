import React from "react";

const SearchBar = (props) => {
  const { handleOnChange } = props;

  return (
    <div className="input-group p-2 m-auto col-6 ">
      <div className="input-group-prepend">
        <button className="btn btn-outline-secondary" type="button">
          Search
        </button>
      </div>
      <input
        type="text"
        placeholder="Search by name"
        onChange={(e) => handleOnChange(e.target.value)}
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;
