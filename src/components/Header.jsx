import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const isUserLogged = false;
  return (
    <header>
      <Link to="/">Home</Link>
      {isUserLogged ? (
        <Link to="/logOut">Log Out</Link>
      ) : (
        <div>
          <Link to="logIn">Log In</Link>
          <Link to="signUp">Sign Up</Link>
        </div>
      )}
    </header>
  );
}

export default Header;
