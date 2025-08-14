"use client";

import { ArrowDownWideNarrow } from "lucide-react";
import React, { useState } from "react";

const Filter = ({ setRegion }) => {
  const [regional, SetRegional] = useState(0);
  const continent = ["Asia", "Oceania", "Africa", "Europe", "Americas"];
  const handleClick = () => {
    SetRegional((prev) => !prev);
  };
  return (
    <div className="flex mr-5 justify-center  relative">
      <button
        onClick={() => {
          handleClick();
        }}
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        type="button"
        className="bg-white text-black dark:text-white dark:bg-zinc-600 p-2 rounded-md flex gap-x-2 border-2 border-zinc-500/20">
        Filter By Region
        <ArrowDownWideNarrow />
      </button>
      {regional ? (
        <div className="absolute top-12 flex flex-col flex-end bg-white text-black dark:bg-zinc-700  dark:text-white rounded-xl p-4 py-0 cursor-pointer pt-2 pb-2 shadow-md shadow-black/40">
          {continent.map((region) => (
            <ul>
              <li
                className="dark:hover:bg-zinc-600  hover:bg-zinc-300 p-2 rounded-lg"
                onClick={() => {
                  handleClick();
                  setRegion(region);
                }}
                value={region}>
                {region}
              </li>
            </ul>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filter;
