import React from "react";
import Link from "next/link";

const Card = ({ name, region, population, cca3, capital, img }) => {
  return (
    <div className="bg-zinc-700 text-white flex flex-col p-2 rounded-md m-3 hover:scale-105 ease-in-out transition-transform duration-200 w-72 h-72 ">
      <Link className="country-card" href={`/country/${name}`}>
        <div className="flex-auto flex-wrap p-2 w-full h-48 ">
          <img src={img} alt={name} className="w-30 h-30 pb-4 object-cover" />

          <h1 key={cca3} className="font-bold text-3xl">
            {name}
          </h1>
          <p>Population: {population.toLocaleString("en-US")}</p>
          <p>Region: {region}</p>
          <p>Captial: {capital?.[0]}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
