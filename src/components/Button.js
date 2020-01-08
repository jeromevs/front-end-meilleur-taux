import React from "react";

const Button = ({
  stateType,
  question,
  setCounter,
  counter,
  userProject,
  setUserProject
}) => {
  return (
    <span
      className={
        userProject[stateType] === question
          ? "button button-on"
          : "button button-off"
      }
      onClick={() => {
        setUserProject({ ...userProject, [stateType]: question });
        setCounter(counter + 1);
      }}
    >
      <span
        className={
          userProject[stateType] === question ? "radio-on" : "radio-off"
        }
      >
        {" "}
      </span>
      {question.toUpperCase()}
    </span>
  );
};

export default Button;
