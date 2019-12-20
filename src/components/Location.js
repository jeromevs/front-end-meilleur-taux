import React, { useState, useEffect } from "react";
import countryList from "./countryList";
import axios from "axios";
import ProgBar from "./ProgBar";

const Location = ({ counter, setCounter, userProject, setUserProject }) => {
  //choice of the country, France by default
  // const [selectedCountry, setSelectedCountry] = useState("France");

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   setSelectedCountry(selectedCountry);
  // };
  // useEffect(() => {
  //   setUserProject({ ...userProject, locationGood: selectedCountry });
  // }, [selectedCountry]);

  //Choice of the city.
  const [city, setCity] = useState(userProject.locationGood.city);
  const [list, setList] = useState([]);
  //function to retrieve the city list on the vipoco api
  const fetchData = async () => {
    const response = await axios.get(
      "https://vicopo.selfbuild.fr/cherche/" + city
    );
    setList(response.data.cities);
    // console.log(response.data.cities);
  };
  useEffect(() => {
    fetchData();
  }, [city]);
  // fill an array with all the answers for the city selected by the user
  const cityArray = [];
  for (let i = 0; i < list.length; i++) {
    const key = list[i];
    let city = key.city;
    cityArray.push(city);
  }
  // console.log(cityArray);
  // fill an array with all the cities selected by the user regarding what he has typed in the input
  const cityList = [];

  for (let i = 0; i < cityArray.length; i++) {
    cityList.push(
      <option value={cityArray[i]} key={i}>
        {cityArray[i]}
      </option>
    );
  }

  // const handleChange = () => {
  //   setUserProject({
  //     ...userProject,
  //     locationGood: { city: city }
  //   });
  //   setCounter(counter + 1);
  // };

  // const handleChange = () => {
  //   setCounter(counter + 1);
  //   setUserProject({});
  // };

  return (
    <div className="location">
      <div className="title">OU SE SITUE VOTRE BIEN A FINANCER ?</div>
      <div className="location-country">
        <span className="question-country">
          Dans quel pays se situe votre projet ? *
        </span>
        {/* <form autoComplete="off" onSubmit={handleSubmit}> */}
        <select
          className="location-select"
          value={userProject.locationGood.country}
          onChange={event => {
            console.log(event.target.value);
            // setSelectedCountry(event.target.value);
            setUserProject({
              ...userProject,
              locationGood: { country: event.target.value }
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
        {/* </form> */}
      </div>
      <div className="location-city">
        <span className="question-country">Ville ou code postal *</span>
        {/* <form autoComplete="off" onSubmit={handleChange}> */}
        <div className="city-choice">
          <input
            className="location-city-input"
            value={city}
            onChange={event => {
              setCity(event.target.value);
            }}
            autoComplete={cityArray}
          />
          {city !== "" ? (
            <select
              size={10}
              className="city-select"
              value={city}
              // readOnly et avant j avais mis onClick
              onChange={event => {
                setCity(event.target.value);
                setUserProject({
                  ...userProject,
                  locationGood: {
                    city: event.target.value,
                    country: userProject.locationGood.country
                  }
                });
              }}
            >
              {cityList}
            </select>
          ) : null}
        </div>

        {/* </form> */}
      </div>
      <ProgBar
        setCounter={setCounter}
        counter={counter}
        userProject={userProject}
        setUserProject={setUserProject}
        // nextFunc={handleChange}
      />
    </div>
  );
};
export default Location;
