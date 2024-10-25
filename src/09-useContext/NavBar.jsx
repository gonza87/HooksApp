import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to="/" className="me-2">
        Inicio
      </Link>
      <Link to="/login" className="me-2">
        Login
      </Link>
      <Link to="/about" className="me-2">
        About
      </Link>
    </>
  );
}

export default NavBar;
