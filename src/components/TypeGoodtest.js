import React, { useState } from "react";
import ProgBar from "./ProgBar";
import Button from "./Button";

const TypeGood = ({ counter, setCounter, userProject, setUserProject }) => {
  const questions = ["MAISON", "APPARTEMENT"];

  const onClick = () => {
    setUserProject({ ...userProject, typeGood: question });
    setCounter(counter + 1);
  };
  return (
    <div className="type-good">
      <div className="title">TYPE DE BIEN</div>
      <div className="button-display">
        <Button
          questions={questions}
          setCounter={setCounter}
          counter={counter}
          userProject={userProject}
          setUserProject={setUserProject}
          onClick={onClick}
        />
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
