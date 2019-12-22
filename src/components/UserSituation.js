import React, { useState } from "react";
import NavBar from "./NavBar";
import ButtonNextOff from "./ButtonNextOff";
import ButtonNextOn from "./ButtonNextOn";

const UserSituation = ({
  counter,
  setCounter,
  userProject,
  setUserProject
}) => {
  const [isChoiceDone, setIsChoiceDone] = useState(false);
  return (
    <div className="page">
      <div className="title">VOTRE SITUATION ACTUELLE</div>
      <div className="button-display">
        <span
          className={
            userProject.userSituation === "locataire"
              ? "button-on"
              : "button-off"
          }
          onClick={() => {
            setUserProject({ ...userProject, userSituation: "locataire" });
            setCounter(counter + 1);
          }}
        >
          <input className="radio" type="radio" />
          LOCATAIRE
        </span>
        <span
          className={
            userProject.userSituation === "proprietaire"
              ? "button-on"
              : "button-off"
          }
          onClick={() => {
            setUserProject({ ...userProject, userSituation: "proprietaire" });
            setCounter(counter + 1);
          }}
        >
          <input className="radio" type="radio" />
          PROPRIETAIRE
        </span>
        <span
          className={
            userProject.userSituation === "logement de fonction"
              ? "button-on"
              : "button-off"
          }
          onClick={() => {
            setUserProject({
              ...userProject,
              userSituation: "logement de fonction"
            });
            setCounter(counter + 1);
          }}
        >
          <input className="radio" type="radio" />
          LOGEMENT DE FONCTION
        </span>
        <span
          className={
            userProject.userSituation === "hebergement a titre gratuit"
              ? "button-on"
              : "button-off"
          }
          onClick={() => {
            setUserProject({
              ...userProject,
              userSituation: "hebergement a titre gratuit"
            });
            setCounter(counter + 1);
          }}
        >
          <input className="radio" type="radio" />
          HEBERGE A TITRE GRATUIT
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
        {userProject.userSituation === "" ? (
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
export default UserSituation;
