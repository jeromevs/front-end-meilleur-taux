import React, { useState, useEffect } from "react";
import ProgBar from "./ProgBar";

const Finish = ({ counter, setCounter, userProject, setUserProject }) => {
  return (
    <>
      <div>FINISH</div>
      <ProgBar
        setCounter={setCounter}
        counter={counter}
        userProject={userProject}
        setUserProject={setUserProject}
      />
    </>
  );
};
export default Finish;
