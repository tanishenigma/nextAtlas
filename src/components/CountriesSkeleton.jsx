import React from "react";

const CountriesSkeleton = () => {
  return (
    <>
      {Array.from({ length: 30 }).map((el, i) => {
        return (
          <div className="bg-zinc-700 text-white flex flex-col p-2 rounded-md m-3 hover:scale-105 ease-in-out transition-transform duration-200 w-72 h-72 ">
            <div className="flex flex-col p-2 w-full  gap-y-2 h-full ">
              <div className="w-12rem h-36 rounded-xl shine-element bg-zinc-500"></div>
              <div className="w-12rem h-10   rounded-xl shine-element bg-zinc-500"></div>
              <div className="w-12rem h-10 rounded-xl shine-element bg-zinc-500"></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CountriesSkeleton;
