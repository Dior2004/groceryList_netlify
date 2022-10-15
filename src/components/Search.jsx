import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <label htmlFor="search">Search</label>
      <input
        type={"text"}
        placeholder="Seach Item"
        id="search"
        role="searchbox"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        style={{ margin: 0 }}
      />
    </form>
  );
};

export default Search;
