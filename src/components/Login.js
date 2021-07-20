import { Redirect } from "react-router-dom";
import React, { useState } from "react";
import { login } from "../api/Auth";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    login(email, password);
    setIsLoggedIn(true);
    props.appStateDispatch({ type: "SET_AUTH", payload: true });
  };
  if (isLoggedIn) {
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
    </div>
  );
}

export default Login;
