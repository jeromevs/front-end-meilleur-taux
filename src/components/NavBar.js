import React from "react";

const NavBar = ({ setCounter, counter, userProject, setUserProject }) => {
  return (
    <div className="nav-bar">
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
    </div>
  );
};

export default NavBar;
