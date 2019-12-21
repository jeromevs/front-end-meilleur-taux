import React, { useState } from "react";
import Image from "../images/visuel-desktop-email.jpg";
import axios from "axios";
import Cookies from "js-cookie";
import NavBar from "./NavBar";

const Email = ({ counter, setCounter, userProject, setUserProject }) => {
  const [checkbox, setCheckbox] = useState(false);
  const [isAllOk, setIsAllOk] = useState(false);
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
    <div className="page">
      <div className="title">VOS COORDONNEES</div>
      <div className="email-header">
        <span className="email-message">
          Un devis vous sera envoye par mail avec un recapitulatif de votre
          demande
        </span>
        <img className="email-image" src={Image} alt="email" />
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
      {isAllOk === true ? (
        <div className="email-error-message">
          merci de renseigner votre email et d'accepter de recevoir par email
          les proposistions de Meilleurtaux pour valider votre demande
        </div>
      ) : null}

      <div className="down">
        <NavBar
          setCounter={setCounter}
          counter={counter}
          userProject={userProject}
          setUserProject={setUserProject}
        />
        {checkbox === false ||
        emailRegEx.test(userProject.userEmail) === false ||
        userProject.userEmail === "" ? (
          <span
            className="next-button-off"
            onClick={() => {
              setIsAllOk(!isAllOk);
            }}
          >
            Valider
          </span>
        ) : (
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
        )}
      </div>
    </div>
  );
};
export default Email;
