import React from "react";
import Logoheader from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <h1>
          <img src={Logoheader} className="logoKasa" alt="logo de kasa" />
        </h1>
        <div className="navFlex">
          <NavLink
            to="/"
            activeclassname="active"
            className="navLink"
            exact="true"
          >
            Accueil
          </NavLink>
          <NavLink
            to="/propos"
            activeclassname="active"
            className="navLink" // Classe CSS existante
            exact="true"
          >
            A propos
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
