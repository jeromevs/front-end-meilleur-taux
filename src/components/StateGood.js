import React from "react";

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
    </div>
  );
};
export default StateGood;
