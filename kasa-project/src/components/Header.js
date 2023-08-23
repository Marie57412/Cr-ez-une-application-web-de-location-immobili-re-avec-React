import React from "react";
import Logoheader from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <h1>
          <img src={Logoheader} className="logoKasa" alt="logo de kasa"></img>
        </h1>
        <div className="navFlex">
          <Link to="/" className="navLink">Accueil</Link>
          <Link to="/propos" className="navLink">À propos</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;