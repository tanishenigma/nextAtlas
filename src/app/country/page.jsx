"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import CountriesData from "@/data/countriesData";
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

    // Find the country in the local data array
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
      });
    } else {
      setNotFound(true);
    }
  }, [countryName]);
  return (
    <div className="country-details-container">
      <span className="back-button" onClick={() => history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      {notFound ? (
        <div>Country not found</div>
      ) : countryData ? (
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
            <div className="details-text">
              <p>
                <b>Native Name: {countryData.nativeName}</b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: {countryData.population.toLocaleString("en-IN")}
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: {countryData.region}</b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: {countryData.subregion}</b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: {countryData.capital.join(", ")}</b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: {countryData.tld}</b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: {countryData.currencies}</b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages: {countryData.languages}</b>
                <span className="languages"></span>
              </p>
            </div>
            <div className="border-countries">
              <b>Border Countries: </b>&nbsp;
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default page;
