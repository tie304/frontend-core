import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("loging in:" + email);
  };

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
