import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import { login } from "../api/Auth";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const handleLogin = () => {
    login(email, password, props.appStateDispatch, setLoginError);
  };
  if (props.appState.authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="form-container">
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="input"
            type="email"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Password</label>
        <div className="control">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="input"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <button onClick={handleLogin} className="button form-container__button">
        Login
      </button>
      {loginError ? (
        <p className="help is-danger">Email or password is invalid</p>
      ) : (
        ""
      )}
    </div>
  );
}

export default Login;
