import React, { useState, useEffect } from "react";
import ProgBar from "./ProgBar";

const Amount = ({ counter, setCounter, userProject, setUserProject }) => {
  // const [good, setGood] = useState();

  // const [work, setWork] = useState();
  //   console.log(good);
  //   console.log(work);

  let notary = 0;

  useEffect(() => {
    if (userProject.stateGood === "ancien") {
      notary = userProject.amount.good * 0.0738;
    } else {
      notary = userProject.amount.good * 0.018;
    }
  }, [userProject.amount.good]);

  //   console.log(notary);
  let project = 0;

  if (
    userProject.amount.good === undefined ||
    userProject.amount.work === undefined
  ) {
    project = "";
  } else {
    project = userProject.amount.good + userProject.amount.work + notary;
  }
  // each time the project value changes set the userProject
  // useEffect(() => {
  //   setUserProject({
  //     ...userProject,
  //     amount: {
  //       good: good,
  //       work: work,
  //       notary: notary,
  //       project: project
  //     }
  //   });
  // }, [project]);
  return (
    <div className="amount">
      <div className="title">DEFINISSONS LE MONTANT DE VOTRE PROJET</div>
      <div className="amount-project-grey">
        <span className="amount-project-question">
          Montant estime de votre acquisition
        </span>
        <input
          className="amount-project-input"
          // placeholder={good}
          type="number"
          value={userProject.amount.good}
          onChange={event => {
            setUserProject({
              ...userProject,
              amount: {
                good: Number(event.target.value),
                work: userProject.amount.work,
                notary: notary,
                project: project
              }
            });
          }}
        />
        <span className="span-amount"> €</span>
      </div>
      <div className="amount-project-white">
        <span className="amount-project-question">
          Montant estime des travaux
        </span>
        <input
          className="amount-project-input"
          placeholder={userProject.amount.work}
          type="number"
          value={userProject.amount.work}
          onChange={event => {
            setUserProject({
              ...userProject,
              amount: {
                good: userProject.amount.good,
                work: Number(event.target.value),
                notary: notary,
                project: project
              }
            });
          }}
        />
        <span className="span-amount"> €</span>
      </div>
      <div className="amount-project-grey">
        <span className="amount-project-question">Frais de notaire *</span>
        <input
          className="amount-project-input"
          value={userProject.amount.notary.toFixed(2)}
          readOnly
        />
        <span className="span-amount"> €</span>
      </div>
      <div className="amount-project-white">
        <span className="amount-project-question">Budget estime du projet</span>
        <input className="amount-project-input" defaultValue={project} />
        <span className="span-amount"> €</span>
        {/* {console.log(project)} */}
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
export default Amount;
