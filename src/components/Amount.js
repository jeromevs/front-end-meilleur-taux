import React, { useState } from "react";

const Amount = ({ counter, setCounter, userProject, setUserProject }) => {
  const [good, setGood] = useState();

  return (
    <div className="amount">
      <div className="title">DEFINISSONS LE MONTANT DE VOTRE PROJET</div>
      <div className="amount-project">
        <span>Montant estime de votre acquisition</span>
      </div>
    </div>
  );
};
export default Amount;
