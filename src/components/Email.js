import React, { useState, useEffect } from "react";
import Image from "../images/visuel-desktop-email.jpg";
import axios from "axios";
import Cookies from "js-cookie";

const Email = ({ counter, setCounter, userProject, setUserProject }) => {
  const [checkbox, setCheckbox] = useState(false);
  // const [fileId, setFileId] = useState("");
  //regEx to verify that user types a valid email address form
  const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const sendUserProject = async () => {
    try {
      const response = await axios.post(
        "https://meilleurtaux.herokuapp.com/userProject/save",
        userProject
      );
      console.log(response.data.fileId);
      setUserProject({ ...userProject, fileId: response.data.fileId });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="email">
      <div className="title">VOS COORDONNEES</div>
      <div className="email-header">
        <span className="email-message">
          Un devis vous sera envoye par mail avec un recapitulatif de votre
          demande
        </span>
        <img className="email-image" src={Image} alt="image email" />
      </div>
      <div className="amount-project-grey">
        <span className="amount-project-question">
          Adresse e-mail emprunteur *
        </span>
        <input
          className="amount-project-input"
          type="email"
          value={userProject.userEmail}
          onChange={event => {
            setUserProject({ ...userProject, userEmail: event.target.value });
          }}
        />
        {emailRegEx.test(userProject.userEmail) === false &&
        userProject.userEmail ? (
          <div className="email-wrong">
            Vous devez saisir une adresse email valide
          </div>
        ) : null}
      </div>
      <input
        className="checkbox"
        type="checkbox"
        onClick={event => {
          setCheckbox(!checkbox);
        }}
      />
      <span className="checkbox-text">
        J'accepte de recevoir par email des propositions de Meilleurtaux
      </span>
      {checkbox === false ? (
        <div>
          merci d'accepter de recevoir notre poposition par e-mail pour valider
          votre dossier
        </div>
      ) : (
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
              Cookies.remove("counter");
              Cookies.remove("userProject");
              sendUserProject();
              setCounter(counter + 1);
            }}
          >
            Valider
          </span>
        </div>
      )}
    </div>
  );
};
export default Email;
