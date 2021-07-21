import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { handleSignout } from "../utils";
import { AppContext } from "../AppContext";

const RenderLogin = () => {
  return (
    <Link className="button" to="/login">
      Login
    </Link>
  );
};

const RenderLogout = (props) => {
  return (
    <button
      onClick={(e) => handleSignout(props.appStateDispatch)}
      className="button"
    >
      Signout
    </button>
  );
};

function Header(props) {
  return (
    <header className="header">
      {!props.appState.authenticated ? (
        <RenderLogin />
      ) : (
        <RenderLogout appStateDispatch={props.appStateDispatch} />
      )}
    </header>
  );
}

export default Header;
