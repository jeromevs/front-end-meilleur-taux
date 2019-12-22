import React from "react";

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
