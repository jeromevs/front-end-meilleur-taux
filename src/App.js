import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Cookies from "js-cookie";

import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header";
import ProgBar from "./components/ProgBar";

function App() {
  // set a counter to enable navigation between the different elements
  const [counter, setCounter] = useState(0);
  //set the userProject
  const [userProject, setUserProject] = useState({});

  useEffect(() => {
    console.log(userProject);
    // console.log(counter);
  }, [userProject]);

  return (
    <div className="app">
      <div className="container">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home
                counter={counter}
                setCounter={setCounter}
                userProject={userProject}
                setUserProject={setUserProject}
              />
            </Route>
          </Switch>
          <ProgBar setCounter={setCounter} counter={counter} />
        </Router>
      </div>
    </div>
  );
}

export default App;
