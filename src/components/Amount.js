import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import ButtonNextOn from "./ButtonNextOn";
import ButtonNextOff from "./ButtonNextOff";

const Amount = ({ counter, setCounter, userProject, setUserProject }) => {
  const [amountGood, setAmountGood] = useState(userProject.amount.good);
  const [amountWork, setAmountWork] = useState(userProject.amount.work);
  const [isAmountOk, setIsAmountOk] = useState(false);
  const [isChoiceDone, setIsChoiceDone] = useState(false);
  // calculation of the notary fees and the total of the userProject
  useEffect(() => {
    let notaire = 0;
    const good = Number.isNaN(amountGood) ? 0 : amountGood;
    const work = Number.isNaN(amountWork) ? 0 : amountWork;
    if (userProject.stateGood === "ancien") {
      notaire = Math.round(good * 0.0738);
    } else {
      notaire = Math.round(good * 0.018);
    }

    let total = notaire + good + work;

    setUserProject({
      ...userProject,
      amount: {
        good: good === 0 ? "" : good,
        work: work === 0 ? "" : work,
        notary: notaire,
        project: total === 0 ? "" : total
      }
    });
    // eslint-disable-next-line
  }, [amountGood, amountWork]);

  return (
    <div className="page">
      <div className="title">DEFINISSONS LE MONTANT DE VOTRE PROJET</div>
      <div className="amount-project-grey">
        <span className="amount-project-question">
          Montant estime de votre acquisition
        </span>
        <input
          className="amount-project-input"
          type="number"
          value={amountGood}
          onChange={event => {
            setAmountGood(parseInt(event.target.value, 10));
            setIsAmountOk(true);
          }}
        />
        {/* displays an alert if the user didn't fulfill the amount of his acquisition */}
        <span className="span-amount"> €</span>
        {userProject.amount.good !== "" || isAmountOk === false ? null : (
          <span style={{ paddingLeft: "5px" }}>merci de remplir ce champs</span>
        )}
      </div>
      <div className="amount-project-white">
        <span className="amount-project-question">
          Montant estime des travaux
        </span>
        <input
          className="amount-project-input"
          type="number"
          value={amountWork}
          onChange={event => {
            setAmountWork(parseInt(event.target.value, 10));
          }}
        />
        <span className="span-amount"> €</span>
      </div>
      <div className="amount-project-grey">
        <span className="amount-project-question">Frais de notaire *</span>
        <input
          readOnly
          className="amount-project-input"
          value={userProject.amount.notary}
        />
        <span className="span-amount"> €</span>
      </div>
      <div className="amount-project-white">
        <span className="amount-project-question">Budget estime du projet</span>
        <input
          readOnly
          className="amount-project-input"
          value={userProject.amount.project}
        />
        <span className="span-amount"> €</span>
      </div>
      {isChoiceDone === false ? null : (
        <span className="error-message">
          Merci de faire un choix avant de valider
        </span>
      )}

      <div className="down">
        {/* call of the NavBar which includes back button and progressions bar */}
        <NavBar
          setCounter={setCounter}
          counter={counter}
          userProject={userProject}
          setUserProject={setUserProject}
        />
        {/* depending on the selection of the user, the next button is activated and displays an alert or goes to the next page if the selection has been made */}
        {amountGood === "" || userProject.amount.good === "" ? (
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
export default Amount;
