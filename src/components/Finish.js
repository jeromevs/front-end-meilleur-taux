import React, { useState, useEffect } from "react";
import ProgBar from "./ProgBar";
import Cookies from "js-cookie";

const Finish = ({ counter, setCounter, userProject, setUserProject }) => {
  return (
    <>
      <button
        onClick={() => {
          Cookies.remove("counter");
          Cookies.remove("userProject");
          setCounter(0);
          window.location.reload(true);
        }}
      />

      <div>FINISH</div>
      <div>{userProject.fileId}</div>
    </>
  );
};
export default Finish;
