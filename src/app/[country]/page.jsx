"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import CountriesData from "@/data/countriesData";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
const page = () => {
  const params = useParams();
  const countryName = params.country;
  const [countryData, setCountryData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!countryName) {
      setNotFound(true);
      return;
    }

    const foundCountry = CountriesData.find(
      (country) =>
        country.name.common.toLowerCase() === countryName.toLowerCase()
    );

    if (foundCountry) {
      setCountryData({
        name: foundCountry.name.common,
        nativeName: Object.values(foundCountry.name.nativeName)[0].common,
        population: foundCountry.population,
        region: foundCountry.region,
        subregion: foundCountry.subregion,
        capital: foundCountry.capital,
        flag: foundCountry.flags.svg,
        tld: foundCountry.tld,
        languages: Object.values(foundCountry.languages).join(", "),
        currencies: Object.values(foundCountry.currencies)
          .map((currency) => currency.name)
          .join(", "),
        borders: [],
      });

      foundCountry.borders?.map((country) => {
        const foundBorderCountry = CountriesData.find(
          (singlecountry) =>
            singlecountry.cca3.toLowerCase() === country.toLowerCase()
        );

        if (foundBorderCountry) {
          const { name } = foundBorderCountry;
          setCountryData((prevState) => ({
            ...prevState,
            borders: [...prevState.borders, name.common],
          }));
        }
      });
    } else {
      setNotFound(true);
    }
  }, [countryName]);

  return (
    <div className="w-screen p-5 bg-white dark:bg-zinc-800/20">
      <span className="back-button" onClick={() => history.back()}>
        <div className="flex items-center text-4xl cursor-pointer text-black dark:text-white ">
          <ArrowLeft className="w-10 h-20" />{" "}
          <span className="font-black ml-1">Back</span>
        </div>
      </span>
      {notFound ? (
        <div>Country not found</div>
      ) : countryData !== null ? (
        <div className="flex flex-col text-center mb-10 dark:text-white text-black ">
          <h1 className="text-8xl font-black mb-5 dark:text-white text-black">
            {countryData.name}
          </h1>
          <div className="flex flex-1 text-center items-center gap-x-5 justify-center text-xl font-light ">
            <img
              className="w-96 h-96  ml-40"
              src={countryData.flag}
              alt={`${countryData.name} flag`}
            />
            <div className="flex flex-col  dark:bg-zinc-800 bg-white border-2 border-zinc-500/40 rounded-xl p-10 gap-y-2.5">
              <div className="flex">
                <div className="flex flex-1 flex-col text-left">
                  <p>
                    <span className="font-bold text-xl ">Native Name: </span>
                    {countryData.nativeName}
                  </p>
                  <p>
                    <span className="font-bold text-xl ">Population:</span>
                    {countryData.population.toLocaleString("en-IN")}
                  </p>
                  <p>
                    <span className="font-bold text-xl ">Region:</span>{" "}
                    {countryData.region}
                  </p>
                  <p>
                    <span className="font-bold text-xl ">Sub Region:</span>{" "}
                    {countryData.subregion}
                  </p>
                  <p>
                    <span className="font-bold text-xl ">Capital:</span>{" "}
                    {countryData.capital.join(", ")}
                  </p>
                </div>
                <div className="flex flex-2 flex-col text-left">
                  <p>
                    <span className="font-bold text-xl ">
                      Top Level Domain:
                    </span>{" "}
                    {countryData.tld}
                  </p>
                  <p>
                    <span className="font-bold text-xl ">Currencies:</span>{" "}
                    {countryData.currencies}
                  </p>
                  <p>
                    <span className="font-bold text-xl">Languages: </span>
                    {countryData.languages}
                  </p>
                  <div className="border-countries">
                    {countryData.borders.length != 0 && (
                      <span className="text-xl font-bold flex">
                        Border Countries:
                        {countryData.borders.map((border) => (
                          <div className="flex flex-wrap ">
                            <Link
                              key={border}
                              href={`/${border}`}
                              className="m-1 bg-zinc-400 text-white font-light  dark:text-white dark:bg-zinc-500/80 rounded-xl p-2 ">
                              {border}
                            </Link>
                          </div>
                        ))}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <singleSkeleton />
        </div>
      )}
    </div>
  );
};

export default page;
