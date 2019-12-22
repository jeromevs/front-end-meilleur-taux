import React from "react";

const ButtonNextOn = ({ counter, setCounter }) => {
  return (
    <>
      <span
        className="next-button-on"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Suivant
      </span>
    </>
  );
};
export default ButtonNextOn;
