import React, { useState } from "react";
import NavBar from "./NavBar";
import ButtonNextOff from "./ButtonNextOff";
import ButtonNextOn from "./ButtonNextOn";
import Button from "./Button";

const questions = [
  "residence principale",
  "residence secondaire",
  "investissement locatif"
];
const stateType = "usageGood";

const UsageGood = ({ counter, setCounter, userProject, setUserProject }) => {
  const [isChoiceDone, setIsChoiceDone] = useState(false);
  return (
    <div className="page">
      <div className="title">USAGE DU BIEN</div>
      <div className="button-display">
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
        <NavBar
          setCounter={setCounter}
          counter={counter}
          userProject={userProject}
          setUserProject={setUserProject}
        />
        {userProject.usageGood === "" ? (
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
export default UsageGood;
