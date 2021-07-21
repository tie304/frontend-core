import axios from "axios";
import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import { tokenStillValid } from "./utils";
import Header from "./components/Header";
import Login from "./components/Login";
import PrivateRoute from "./components/utils/PrivateRoute";


import AppStateReducer from "./reducers/AppState";
import { AppContext } from "./AppContext";


// set a default response handler
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);

const TestRoute = () => <h1>Dashboard</h1>;

function App() {
  const token = localStorage.getItem("access_token");
  axios.defaults.headers.common = { Authorization: `bearer ${token}` };
	const { appState, appStateDispatch } = useContext(AppContext)
	if (tokenStillValid() && !appState.authenticated) {
			appStateDispatch({type: "SET_AUTH", payload: true})
	}
  return (
    <Router>
      <div>
        <Header appState={appState} appStateDispatch={appStateDispatch} />
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
            <Login appState={appState} appStateDispatch={appStateDispatch} />
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
