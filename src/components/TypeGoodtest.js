import React, { useState } from "react";
import NavBar from "./NavBar";
import Button from "./Button";
import ButtonNextOff from "./ButtonNextOff";
import ButtonNextOn from "./ButtonNextOn";

const TypeGood = ({ counter, setCounter, userProject, setUserProject }) => {
  const [isChoiceDone, setIsChoiceDone] = useState(false);
  const questions = ["MAISON", "APPARTEMENT"];
  const onQuestion = () => {
    setUserProject({ ...userProject, typeGood: "maison" });
    setCounter(counter + 1);
  };
  return (
    <div className="page">
      <div className="title">TYPE DE BIEN</div>
      <div className="button-display">
        <Button
          userProject={userProject}
          setUserProject={setUserProject}
          questions={questions}
          counter={counter}
          setCounter={setCounter}
          onQuestion={onQuestion}
        />
        <span
          className={
            userProject.typeGood === "maison" ? "button-on" : "button-off"
          }
          onClick={() => {
            onQuestion();
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
export default TypeGood;
