import React, { useState } from "react";
import NavBar from "./NavBar";
import ButtonNextOff from "./ButtonNextOff";
import ButtonNextOn from "./ButtonNextOn";
import Button from "./Button";

const questions = ["maison", "appartement"];
const stateType = "typeGood";

const TypeGood = ({ counter, setCounter, userProject, setUserProject }) => {
  const [isChoiceDone, setIsChoiceDone] = useState(false);

  return (
    <div className="page">
      <div className="title">TYPE DE BIEN</div>
      <div className="button-display">
        {/* on click on the buttons which are span, with className changing the user will change the value of the userProject object in App.js */}
        {questions.map((question, index) => {
          return (
            <Button
              key={index}
              stateType={stateType}
              question={question}
              userProject={userProject}
              setUserProject={setUserProject}
              setCounter={setCounter}
              counter={counter}
            />
          );
        })}
      </div>
      {isChoiceDone === false ? null : (
        <span className="error-message">
          Merci de faire un choix avant de valider
        </span>
      )}
      <div className="down">
        {/* call of the NavBar which includes back button and progressions bar */}
        <NavBar
          setCounter={setCounter}
          counter={counter}
          userProject={userProject}
          setUserProject={setUserProject}
        />
        {/* depending on the selection of the user, the next button is activated and displays an alert or goes to the next page if the selection has been made */}
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
