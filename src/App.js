import axios from "axios";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Login from "./components/Login";

// set a default response handler
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    alert("Error");
    return Promise.reject(err);
  }
);

function App() {
  const token = localStorage.getItem("access_token");
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  return (
    <Router>
      <div>
        <Header />
        {/* A <Switch> looks through its children <Route>s and
							renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>;
}

export default App;
