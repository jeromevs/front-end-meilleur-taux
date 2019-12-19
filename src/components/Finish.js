import React, { useState, useEffect } from "react";
import ProgBar from "./ProgBar";

const Finish = ({ counter, setCounter, userProject, setUserProject }) => {
  return (
    <>
      <div>FINISH</div>
      <div>{userProject.fileId}</div>
    </>
  );
};
export default Finish;
