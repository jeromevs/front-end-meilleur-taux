import React from "react";
import ProgBar from "./ProgBar";

const UsageGood = ({ counter, setCounter, userProject, setUserProject }) => {
  return (
    <div className="usage-good">
      <div className="title">USAGE DU BIEN</div>
      <div className="button-display">
        <span
          className="usagegood-button"
          onClick={() => {
            setUserProject({
              ...userProject,
              usageGood: "residence principale"
            });
            setCounter(counter + 1);
          }}
        >
          RESIDENCE PRINCIPALE
        </span>
        <span
          className="usagegood-button"
          onClick={() => {
            setUserProject({
              ...userProject,
              usageGood: "residence secondaire"
            });
            setCounter(counter + 1);
          }}
        >
          RESIDENCE SECONDAIRE
        </span>
        <span
          className="usagegood-button"
          onClick={() => {
            setUserProject({
              ...userProject,
              usageGood: "investissement locatif"
            });
            setCounter(counter + 1);
          }}
        >
          INVESTISSEMENT LOCATIF
        </span>
      </div>
      <ProgBar
        setCounter={setCounter}
        counter={counter}
        userProject={userProject}
        setUserProject={setUserProject}
      />
    </div>
  );
};
export default UsageGood;
