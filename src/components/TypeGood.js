import React from "react";

const TypeGood = ({ counter, setCounter, userProject, setUserProject }) => {
  return (
    <div className="type-good">
      <div className="title">TYPE DE BIEN</div>
      <div className="button-display">
        <span
          className="typegood-button"
          onClick={() => {
            setUserProject({ ...userProject, typeGood: "maison" });
            setCounter(counter + 1);
          }}
        >
          MAISON
        </span>
        <span
          className="typegood-button"
          onClick={() => {
            setUserProject({ ...userProject, typeGood: "appartement" });
            setCounter(counter + 1);
          }}
        >
          APPARTEMENT
        </span>
      </div>
    </div>
  );
};
export default TypeGood;
