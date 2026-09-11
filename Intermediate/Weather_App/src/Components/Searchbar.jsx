import React from "react";
import { useState } from "react";

function Searchbar({ search, setSearch, onSearch }) {
  return (
    <div className="container">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search for a city..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        />
        <button onClick={() => onSearch()}>Search</button>
      </div>
    </div>
  );
}

export default Searchbar;
