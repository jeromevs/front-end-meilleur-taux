import React, { useState, useEffect } from "react";
import countryList from "./countryList";

const Location = ({ counter, setCounter, userProject, setUserProject }) => {
  const [selectedCountry, setSelectedCountry] = useState("France");
  const handleSubmit = event => {
    event.preventDefault();
    setSelectedCountry(selectedCountry);
  };
  useEffect(() => {
    setUserProject({ ...userProject, locationGood: selectedCountry });
  }, [selectedCountry, setUserProject]);
  return (
    <div className="location">
      <div className="title">OU SE SITUE VOTRE BIEN A FINANCER ?</div>
      <div className="location-country">
        <span className="question-country">
          Dans quel pays se situe votre projet ? *
        </span>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <select
            className="location-select"
            value={selectedCountry}
            onChange={event => {
              setSelectedCountry(event.target.value);
              setUserProject({
                ...userProject,
                locationGood: { country: selectedCountry }
              });
            }}
          >
            {countryList.map(countryName => {
              return (
                <option value={countryName} key={countryName}>
                  {countryName}
                </option>
              );
            })}
          </select>
        </form>
      </div>
      <div className="location-city">
        <span className="question-country">Ville ou code postal *</span>
      </div>
    </div>
  );
};
export default Location;
