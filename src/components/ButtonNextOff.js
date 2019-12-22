import React from "react";
//button just change the state of choiceIsDone (false by default) to display an alert in case user didn't make a change
const ButtonNextOff = ({ isChoiceDone, setIsChoiceDone }) => {
  return (
    <>
      <span
        className="next-button-off"
        onClick={() => {
          setIsChoiceDone(!isChoiceDone);
        }}
      >
        Suivant
      </span>
    </>
  );
};
export default ButtonNextOff;
