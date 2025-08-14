import { SearchIcon } from "lucide-react";
import React from "react";

const Search = ({ setSearch }) => {
  return (
    <div>
      <form className="flex ">
        <div className="p-2 ml-5 bg-white text-black dark:bg-zinc-600  rounded-md dark:text-white border-2 border-zinc-500/20 dark:border-none ">
          <SearchIcon className="inline-block" />
          <input
            className="bg-transparent focus-within:outline-none pl-2"
            placeholder="Search For a Country"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
