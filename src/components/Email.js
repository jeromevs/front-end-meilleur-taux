import React, { useState } from "react";
import Image from "../images/visuel-desktop-email.jpg";
import axios from "axios";
import Cookies from "js-cookie";
import NavBar from "./NavBar";
import ButtonNextOff from "./ButtonNextOff";

const Email = ({ counter, setCounter, userProject, setUserProject }) => {
  const [checkbox, setCheckbox] = useState(false);
  const [isChoiceDone, setIsChoiceDone] = useState(false);
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
        {/* depending on the verification with the regex an alert is displayed if the user doesn't type a string that respects the email address codes */}
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
      {/* displays an alert if the user didn't fulfill email address and validate the checkbox */}
      {isChoiceDone === true ? (
        <div className="email-error-message">
          merci de renseigner votre email et d'accepter de recevoir par email
          les proposistions de Meilleurtaux pour valider votre demande
        </div>
      ) : null}

      <div className="down">
        {/* call of the NavBar which includes back button and progressions bar */}
        <NavBar
          setCounter={setCounter}
          counter={counter}
          userProject={userProject}
          setUserProject={setUserProject}
        />
        {/* depending on the selection of the user, the next button is activated and displays an alert or goes to the next page if the selection has been made */}
        {checkbox === false ||
        emailRegEx.test(userProject.userEmail) === false ||
        userProject.userEmail === "" ? (
          <ButtonNextOff
            isChoiceDone={isChoiceDone}
            setIsChoiceDone={setIsChoiceDone}
          />
        ) : (
          <span
            className="next-button-on"
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
