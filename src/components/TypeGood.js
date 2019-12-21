import React, { useState } from "react";
import NavBar from "./NavBar";

const TypeGood = ({ counter, setCounter, userProject, setUserProject }) => {
  const [isChoiceDone, setIsChoiceDone] = useState(false);
  return (
    <div className="page">
      <div className="title">TYPE DE BIEN</div>
      <div className="button-display">
        <span
          className={
            userProject.typeGood === "maison" ? "button-on" : "button-off"
          }
          onClick={() => {
            setUserProject({ ...userProject, typeGood: "maison" });
            setCounter(counter + 1);
          }}
        >
          <input className="radio" type="radio" />
          MAISON
        </span>
        <span
          className={
            userProject.typeGood === "appartement" ? "button-on" : "button-off"
          }
          onClick={() => {
            setUserProject({ ...userProject, typeGood: "appartement" });
            setCounter(counter + 1);
          }}
        >
          <input className="radio" type="radio" />
          APPARTEMENT
        </span>
      </div>
      {isChoiceDone === false ? null : (
        <span className="error-message">
          Merci de faire un choix avant de valider
        </span>
      )}
      <div className="down">
        <NavBar
          setCounter={setCounter}
          counter={counter}
          userProject={userProject}
          setUserProject={setUserProject}
        />
        {userProject.typeGood === "" ? (
          <span
            className="next-button-off"
            onClick={() => {
              setIsChoiceDone(!isChoiceDone);
            }}
          >
            Suivant
          </span>
        ) : (
          <span
            className="next-button"
            onClick={() => {
              setCounter(counter + 1);
            }}
          >
            Suivant
          </span>
        )}
      </div>
    </div>
  );
};
export default TypeGood;
