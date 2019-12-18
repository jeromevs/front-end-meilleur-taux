import React, { useState, useEffect } from "react";

const Amount = ({ counter, setCounter, userProject, setUserProject }) => {
  const [good, setGood] = useState(null);
  const [work, setWork] = useState(null);
  //   console.log(good);
  //   console.log(work);

  let notary = 0;

  if (userProject.stateGood === "ancien") {
    notary = good * 0.0738;
  } else {
    notary = good * 0.018;
  }
  //   console.log(notary);
  let project = 0;

  if (good === null) {
    project = "";
  } else {
    project = Number(good) + Number(work) + Number(notary);
  }
  useEffect(() => {
    setUserProject({
      ...userProject,
      amount: {
        good: good,
        work: work,
        notary: notary,
        project: project
      }
    });
  }, [work]);
  return (
    <div className="amount">
      <div className="title">DEFINISSONS LE MONTANT DE VOTRE PROJET</div>
      <div className="amount-project-grey">
        <span className="amount-project-question">
          Montant estime de votre acquisition
        </span>
        <input
          className="amount-project-input"
          type="number"
          value={good}
          onChange={event => {
            setGood(event.target.value);
            // setUserProject({
            //   ...userProject,
            //   amount: {
            //     good: good
            //   }
            // });
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
          type="number"
          value={work}
          onChange={event => {
            setWork(event.target.value);
          }}
        />
        <span className="span-amount"> €</span>
      </div>
      <div className="amount-project-grey">
        <span className="amount-project-question">Frais de notaire *</span>
        <input className="amount-project-input" value={notary} />
        <span className="span-amount"> €</span>
      </div>
      <div className="amount-project-white">
        <span className="amount-project-question">Budget estime du projet</span>
        <input className="amount-project-input" value={project} />
        <span className="span-amount"> €</span>
        {/* {console.log(project)} */}
      </div>
    </div>
  );
};
export default Amount;
