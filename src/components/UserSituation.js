import React from "react";

const UserSituation = ({
  counter,
  setCounter,
  userProject,
  setUserProject
}) => {
  return (
    <div className="user-situation">
      <div className="title">VOTRE SITUATION ACTUELLE</div>
      <div className="button-display">
        <span
          className="user-situation-button"
          onClick={() => {
            setUserProject({ ...userProject, userSituation: "locataire" });
            setCounter(counter + 1);
          }}
        >
          LOCATAIRE
        </span>
        <span
          className="user-situation-button"
          onClick={() => {
            setUserProject({ ...userProject, userSituation: "proprietaire" });
            setCounter(counter + 1);
          }}
        >
          PROPRIETAIRE
        </span>
        <span
          className="user-situation-button"
          onClick={() => {
            setUserProject({
              ...userProject,
              userSituation: "logement de fonction"
            });
            setCounter(counter + 1);
          }}
        >
          BENEFICIAIRE D'UN LOGEMENT DE FONCTION
        </span>
        <span
          className="user-situation-button"
          onClick={() => {
            setUserProject({
              ...userProject,
              userSituation: "hebergement a titre gratuit"
            });
            setCounter(counter + 1);
          }}
        >
          HEBERGE A TITRE GRATUIT
        </span>
      </div>
    </div>
  );
};
export default UserSituation;
