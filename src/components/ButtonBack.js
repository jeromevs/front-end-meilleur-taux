import React from "react";

const ButtonBack = ({ setCounter, counter }) => {
  return (
    <>
      <span
        className="prev-button"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        précédent
      </span>
    </>
  );
};
export default ButtonBack;
