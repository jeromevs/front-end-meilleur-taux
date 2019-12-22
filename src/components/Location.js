import React, { useState, useEffect } from "react";
import countryList from "./countryList";
import axios from "axios";
import NavBar from "./NavBar";
import ButtonNextOn from "./ButtonNextOn";
import ButtonNextOff from "./ButtonNextOff";

const Location = ({ counter, setCounter, userProject, setUserProject }) => {
  const [isChoiceDone, setIsChoiceDone] = useState(false);
  //Choice of the city.
  const [city, setCity] = useState(userProject.locationGood.city);
  const [list, setList] = useState([]);
  //function to retrieve the city list on the vipoco api
  const fetchData = async () => {
    const response = await axios.get(
      "https://vicopo.selfbuild.fr/cherche/" + city
    );
    setList(response.data.cities);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [city]);
  // fill an array with all the answers for the city selected by the user
  const cityArray = [];
  for (let i = 0; i < list.length; i++) {
    const key = list[i];
    let city = key.city;
    cityArray.push(city);
  }

  // fill an array with all the cities selected by the user regarding what he has typed in the input
  const cityList = [];

  for (let i = 0; i < cityArray.length; i++) {
    cityList.push(
      <option value={cityArray[i]} key={i}>
        {cityArray[i]}
      </option>
    );
  }

  return (
    <div className="page">
      <div className="title">OU SE SITUE VOTRE BIEN A FINANCER ?</div>
      <div className="location-country">
        <span className="question-country">
          Dans quel pays se situe votre projet ? *
        </span>
        {/* displays an array of all the countries and set the selection in the userProject*/}
        <select
          className="location-select"
          value={userProject.locationGood.country}
          onChange={event => {
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
      </div>
      {/* if selected country is different than France, no possibility to select the city, If selected country is France the user can select the city in an array corresponding to the first letters typed in the input */}
      {userProject.locationGood.country === "France" ? (
        <div className="location-city">
          <span className="question-country">Ville ou code postal *</span>

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
        </div>
      ) : null}
      {/* display an alert message if the user wants to go to the next page without having made his choice */}
      {isChoiceDone === false ? null : (
        <span className="error-message">
          Merci de faire un choix avant de valider
        </span>
      )}
      <div className="location-text">
        La connaissance du lieu du bien permettra de calculer les frais de
        notaire selon les conditions en vigueur dans le departement concerne.
      </div>
      <div className="down">
        {/* call of the NavBar which includes back button and progressions bar */}
        <NavBar
          setCounter={setCounter}
          counter={counter}
          userProject={userProject}
          setUserProject={setUserProject}
        />
        {/* depending on the selection of the user, the next button is activated and displays an alert or goes to the next page if the selection has been made */}
        {userProject.locationGood.country === "France" &&
        !userProject.locationGood.city ? (
          <ButtonNextOff
            isChoiceDone={isChoiceDone}
            setIsChoiceDone={setIsChoiceDone}
          />
        ) : (
          <ButtonNextOn counter={counter} setCounter={setCounter} />
        )}
      </div>
    </div>
  );
};
export default Location;
