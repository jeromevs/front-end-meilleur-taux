import React from "react";

const Button = ({
  questions,
  setCounter,
  counter,
  userProject,
  setUserProject,
  good
}) => {
  return (
    <>
      {questions.map(question => {
        return (
          <span
            key={question}
            className={
              userProject.typeGood === question ? "button-on" : "button-off"
            }
            onClick={() => {
              setUserProject({ ...userProject, good: question });
              setCounter(counter + 1);
            }}
          >
            <input type="radio" />
            {question}
          </span>
        );
      })}
    </>
  );
};
export default Button;
