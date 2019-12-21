import React, { useState } from "react";
import NavBar from "./NavBar";

const UsageGood = ({ counter, setCounter, userProject, setUserProject }) => {
  const [isChoiceDone, setIsChoiceDone] = useState(false);
  return (
    <div className="page">
      <div className="title">USAGE DU BIEN</div>
      <div className="button-display">
        <span
          className={
            userProject.usageGood === "residence principale"
              ? "button-on"
              : "button-off"
          }
          onClick={() => {
            setUserProject({
              ...userProject,
              usageGood: "residence principale"
            });
            setCounter(counter + 1);
          }}
        >
          <input className="radio" type="radio" />
          RESIDENCE PRINCIPALE
        </span>
        <span
          className={
            userProject.usageGood === "residence secondaire"
              ? "button-on"
              : "button-off"
          }
          onClick={() => {
            setUserProject({
              ...userProject,
              usageGood: "residence secondaire"
            });
            setCounter(counter + 1);
          }}
        >
          <input className="radio" type="radio" />
          RESIDENCE SECONDAIRE
        </span>
        <span
          className={
            userProject.usageGood === "investissement locatif"
              ? "button-on"
              : "button-off"
          }
          onClick={() => {
            setUserProject({
              ...userProject,
              usageGood: "investissement locatif"
            });
            setCounter(counter + 1);
          }}
        >
          <input className="radio" type="radio" />
          INVESTISSEMENT LOCATIF
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
        {userProject.usageGood === "" ? (
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
export default UsageGood;
