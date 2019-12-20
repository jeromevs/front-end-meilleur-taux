import React, { useState } from "react";
import ProgBar from "./ProgBar";

const TypeGood = ({ counter, setCounter, userProject, setUserProject }) => {
  return (
    <div className="type-good">
      <div className="title">TYPE DE BIEN</div>
      <div className="button-display">
        <span
          className={
            userProject.typeGood === "maison"
              ? "typegood-button-on"
              : "typegood-button-off"
          }
          style={{ width: "390px" }}
          onClick={() => {
            setUserProject({ ...userProject, typeGood: "maison" });
            setCounter(counter + 1);
          }}
        >
          <input type="radio" />
          MAISON
        </span>
        <span
          className={
            userProject.typeGood === "appartement"
              ? "typegood-button-on"
              : "typegood-button-off"
          }
          onClick={() => {
            setUserProject({ ...userProject, typeGood: "appartement" });
            setCounter(counter + 1);
          }}
        >
          <input type="radio" />
          APPARTEMENT
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
export default TypeGood;
