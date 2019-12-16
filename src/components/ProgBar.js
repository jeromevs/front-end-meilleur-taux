import React from "react";

const ProgBar = ({ setCounter, counter }) => {
  return (
    <div className="prog-bar">
      {counter <= 0 ? (
        <span className="prev-button">précédent</span>
      ) : (
        <span
          className="prev-button"
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          précédent
        </span>
      )}

      {counter}
      <span
        className="next-button"
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        suivant
      </span>
    </div>
  );
};

export default ProgBar;
