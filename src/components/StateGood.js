import React from "react";
import ProgBar from "./ProgBar";

const StateGood = ({ counter, setCounter, userProject, setUserProject }) => {
  return (
    <div className="state-good">
      <div className="title">ETAT DU BIEN</div>
      <div className="button-display">
        <span
          className="stategood-button"
          onClick={() => {
            setUserProject({ ...userProject, stateGood: "ancien" });
            setCounter(counter + 1);
          }}
        >
          ANCIEN
        </span>
        <span
          className="stategood-button"
          onClick={() => {
            setUserProject({ ...userProject, stateGood: "neuf" });
            setCounter(counter + 1);
          }}
        >
          NEUF
        </span>
      </div>
      <ProgBar
        setCounter={setCounter}
        counter={counter}
        userProject={userProject}
        setUserProject={setUserProject}
      />
    </div>
  );
};
export default StateGood;
