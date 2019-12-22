import React, { useState } from "react";
import NavBar from "./NavBar";
import ButtonNextOff from "./ButtonNextOff";
import ButtonNextOn from "./ButtonNextOn";

const StateGood = ({ counter, setCounter, userProject, setUserProject }) => {
  const [isChoiceDone, setIsChoiceDone] = useState(false);
  return (
    <div className="page">
      <div className="title">ETAT DU BIEN</div>
      <div className="button-display">
        <span
          className={
            userProject.stateGood === "ancien" ? "button-on" : "button-off"
          }
          onClick={() => {
            setUserProject({ ...userProject, stateGood: "ancien" });
            setCounter(counter + 1);
          }}
        >
          <input className="radio" type="radio" />
          ANCIEN
        </span>
        <span
          className={
            userProject.stateGood === "neuf" ? "button-on" : "button-off"
          }
          onClick={() => {
            setUserProject({ ...userProject, stateGood: "neuf" });
            setCounter(counter + 1);
          }}
        >
          <input className="radio" type="radio" />
          NEUF
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
        {userProject.stateGood === "" ? (
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
export default StateGood;
