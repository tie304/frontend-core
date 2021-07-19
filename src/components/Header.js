import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="button" to="/login">
        Login
      </Link>
    </header>
  );
}

export default Header;
