import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const SearchRegion = ({ setSearch, setRegion }) => {
  return (
    <div className="flex justify-between mt-10 w-screen">
      <div className="mx-5">
        <Search setSearch={setSearch} />
      </div>
      <div className="mx-5">
        <Filter setRegion={setRegion} />
      </div>
    </div>
  );
};

export default SearchRegion;
