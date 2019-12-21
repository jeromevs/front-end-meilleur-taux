import React, { useState, useEffect } from "react";
import countryList from "./countryList";
import axios from "axios";
import NavBar from "./NavBar";

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
    // console.log(response.data.cities);
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

        <select
          className="location-select"
          value={userProject.locationGood.country}
          onChange={event => {
            console.log(event.target.value);

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
        <NavBar
          setCounter={setCounter}
          counter={counter}
          userProject={userProject}
          setUserProject={setUserProject}
        />
        {userProject.locationGood.country === "France" &&
        !userProject.locationGood.city ? (
          <span
            className="next-button-off"
            onClick={() => {
              setIsChoiceDone(!isChoiceDone);
            }}
          >
            Valider
          </span>
        ) : (
          <span
            className="next-button"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Valider
          </span>
        )}
      </div>
    </div>
  );
};
export default Location;
