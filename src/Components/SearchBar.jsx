import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div>
      <h2>Search Books</h2>
      <input
        type="text"
        placeholder="Search by title or genre..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;