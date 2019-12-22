import React, { useState } from "react";
import NavBar from "./NavBar";
import ButtonNextOff from "./ButtonNextOff";
import ButtonNextOn from "./ButtonNextOn";

const UsageGood = ({ counter, setCounter, userProject, setUserProject }) => {
  const [isChoiceDone, setIsChoiceDone] = useState(false);
  return (
    <div className="page">
      <div className="title">USAGE DU BIEN</div>
      <div className="button-display">
        <span
          className={
            userProject.usageGood === "residence principale"
              ? "button-on"
              : "button-off"
          }
          onClick={() => {
            setUserProject({
              ...userProject,
              usageGood: "residence principale"
            });
            setCounter(counter + 1);
          }}
        >
          <span
            className={
              userProject.usageGood === "residence principale"
                ? "radio-on"
                : "radio-off"
            }
          >
            {" "}
          </span>
          RESIDENCE PRINCIPALE
        </span>
        <span
          className={
            userProject.usageGood === "residence secondaire"
              ? "button-on"
              : "button-off"
          }
          onClick={() => {
            setUserProject({
              ...userProject,
              usageGood: "residence secondaire"
            });
            setCounter(counter + 1);
          }}
        >
          <span
            className={
              userProject.usageGood === "residence secondaire"
                ? "radio-on"
                : "radio-off"
            }
          >
            {" "}
          </span>
          RESIDENCE SECONDAIRE
        </span>
        <span
          className={
            userProject.usageGood === "investissement locatif"
              ? "button-on"
              : "button-off"
          }
          onClick={() => {
            setUserProject({
              ...userProject,
              usageGood: "investissement locatif"
            });
            setCounter(counter + 1);
          }}
        >
          <span
            className={
              userProject.usageGood === "investissement locatif"
                ? "radio-on"
                : "radio-off"
            }
          >
            {" "}
          </span>
          INVESTISSEMENT LOCATIF
        </span>
      </div>
      {isChoiceDone === false ? null : (
        <span className="error-message">
          Merci de faire un choix avant de valider
        </span>
      )}
      <div className="down">
        <NavBar
          setCounter={setCounter}
          counter={counter}
          userProject={userProject}
          setUserProject={setUserProject}
        />
        {userProject.usageGood === "" ? (
          <ButtonNextOff
            isChoiceDone={isChoiceDone}
            setIsChoiceDone={setIsChoiceDone}
          />
        ) : (
          <ButtonNextOn counter={counter} setCounter={setCounter} />
        )}
      </div>
    </div>
  );
};
export default UsageGood;
