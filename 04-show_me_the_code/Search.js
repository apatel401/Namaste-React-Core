import React from "react";
import { BiUserCircle, BiSearchAlt } from "react-icons/bi";

function Search() {
  return (
    <div className="search">
      <h2>Great restaurants in your city, delivering to you</h2>
      <p>Set exact location to find the right restaurants near you.</p>
      <form>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">
          <BiSearchAlt />
        </button>
      </form>
    </div>
  );
}

export default Search;
