import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import "./App.css";
import Home from "./containers/Home";
import Header from "./components/Header";
import ProgBar from "./components/ProgBar";

function App() {
  // set a counter to enable navigation between the different elements
  const [counter, setCounter] = useState(0);
  //set the project to add the different element of the object fulfilled by the user
  const [userProject, setUserProject] = useState({});
  console.log(userProject);
  // if no user cookie: route create, else route update
  useEffect(() => {
    if (!Cookies.get("userProjectId")) {
      const fetchData = async () => {
        try {
          const response = await axios.post(
            "https://meilleurtaux.herokuapp.com/userProject/create",
            userProject
          );
          console.log(response.data);
          Cookies.set("userProjectId", response.data._id);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    } else {
      const fetchData = async () => {
        try {
          const response = await axios.post(
            "https://meilleurtaux.herokuapp.com/userProject/update",
            userProject
          );
          console.log(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }
  }, []);

  useEffect(() => {
    const id = Cookies.get("userProjectId");
    console.log(id);
    if (userProject.id) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://meilleurtaux.herokuapp.com/userProject/" + id
          );
          setUserProject(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchData();
    }
  });

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
