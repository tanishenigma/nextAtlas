import React, { useEffect, useState } from "react";
import Card from "@/components/Card";
import CountriesData from "@/data/countriesData";
import CountriesSkeleton from "@/components/CountriesSkeleton";

export const Countries = ({ search, region }) => {
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    setCountriesData(CountriesData);
  });

  const searchBar = countriesData.filter(
    (country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase()) &&
      (region === "" ||
        country.region.toLowerCase().includes(region.toLowerCase()))
  );

  return (
    <div className="m-5 items-center justify-center flex flex-wrap overflow-auto">
      {countriesData.length ? (
        searchBar.map((country, index) => (
          <Card
            key={`${country.cca3}-${index}`}
            name={country.name.common}
            region={country.region}
            capital={country.capital}
            population={country.population}
            img={country.flags.svg}
          />
        ))
      ) : (
        <>
          <CountriesSkeleton />
        </>
      )}
    </div>
  );
};
