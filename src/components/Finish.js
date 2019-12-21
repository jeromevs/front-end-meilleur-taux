import React from "react";

import Cookies from "js-cookie";

const Finish = ({ setCounter, userProject }) => {
  return (
    <>
      <div className="title">ET VOILA, LE FORMULAIRE EST TERMINE!</div>
      <div className="finish-box">
        <div className="finish-text">Votre numero de dossier est le:</div>
        <span className="fileId">{userProject.fileId}</span>
      </div>
      <span
        onClick={() => {
          Cookies.remove("counter");
          Cookies.remove("userProject");
          setCounter(0);
          window.location.reload(true);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
          <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
        </svg>
      </span>
    </>
  );
};
export default Finish;
