import React from "react";
import TypeGood from "../components/TypeGood";
import StateGood from "../components/StateGood";
import UsageGood from "../components/UsageGood";
import UserSituation from "../components/UserSituation";
function Home({ counter, setCounter, userProject, setUserProject }) {
  return (
    <div className="home">
      {/* allows navigation between the different elements */}
      {counter === 0 ? (
        <TypeGood
          userProject={userProject}
          setUserProject={setUserProject}
          counter={counter}
          setCounter={setCounter}
        />
      ) : null}
      {counter === 1 ? (
        <StateGood
          userProject={userProject}
          setUserProject={setUserProject}
          counter={counter}
          setCounter={setCounter}
        />
      ) : null}
      {counter === 2 ? (
        <UsageGood
          userProject={userProject}
          setUserProject={setUserProject}
          counter={counter}
          setCounter={setCounter}
        />
      ) : null}
      {counter === 3 ? (
        <UserSituation
          userProject={userProject}
          setUserProject={setUserProject}
          counter={counter}
          setCounter={setCounter}
        />
      ) : null}
    </div>
  );
}

export default Home;
