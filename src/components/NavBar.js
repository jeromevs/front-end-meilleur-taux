import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

const NavBar = ({ setCounter, counter }) => {
  let percent = Math.round((counter / 7) * 100);
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
      <div className="progBar">
        <Progress
          percent={percent}
          showInfo={false}
          theme={{
            active: {
              trailColor: "#e4e4e4",
              color: "#ff9d22"
            }
          }}
        />
      </div>
    </div>
  );
};

export default NavBar;
