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
  }, [selectedCountry]);
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
              setUserProject({ ...userProject, locationGood: selectedCountry });
            }}
          >
            {countryList.map(countryName => {
              return <option value={countryName}>{countryName}</option>;
            })}
          </select>
        </form>
      </div>
    </div>
  );
};
export default Location;
