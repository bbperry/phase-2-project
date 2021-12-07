import React from "react"

function FilterBar({ setBookSearch, books }) {
  return (
    <>
      

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setBookSearch(e.target.value)}
      />
    </>
  );
}

export default FilterBar;