import axios from "axios";
import React, { useReducer } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header";
import Login from "./components/Login";
import PrivateRoute from "./components/utils/PrivateRoute";

import AppStateReducer from "./reducers/AppState";
const initalAppState = {
  authenticated: false,
};

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

const TestRoute = () => <h1>Dashboard</h1>;

function App() {
  const token = localStorage.getItem("access_token");
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
  const [appState, appStateDispatch] = useReducer(
    AppStateReducer,
    initalAppState
  );
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
          <PrivateRoute exact path="/dashboard" state={appState}>
            <TestRoute />
          </PrivateRoute>
          <Route exact path="/login">
            <Login appStateDispatch={appStateDispatch} />
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
