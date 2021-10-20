import React from "react";

function Search({ search, handleSearchChange }) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleSearchChange} value={search} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
