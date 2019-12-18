import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header";
import ProgBar from "./components/ProgBar";

function App() {
  // get the last know counter value or set it to 0
  let initialCounter = Cookies.get("counter") || 0;
  //set the project to add the different element of the object fulfilled by the user
  const [counter, setCounter] = useState(initialCounter);

  // get the last know userProject value or set it to {}
  let initialUserProject = Cookies.getJSON("userProject") || {};
  // set a counter to enable navigation between the different elements
  const [userProject, setUserProject] = useState(initialUserProject);
  console.log(userProject);
  // update the cookie 'userProject' every time 'userProject' change
  useEffect(() => {
    Cookies.set("userProject", userProject);
  }, [userProject]);

  // update the cookie 'counter' every time 'counter' change
  useEffect(() => {
    Cookies.set("counter", counter);
  }, [counter]);

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
