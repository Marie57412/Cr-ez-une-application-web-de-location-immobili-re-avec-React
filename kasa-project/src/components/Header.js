import React, { useState } from "react";
import Logoheader from "../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); // Récupère l'objet de l'emplacement courant

  // Utilisez le hook useState pour suivre l'état de la page active
  const [activePage, setActivePage] = useState("/"); // Par défaut, on suppose que c'est la page d'accueil

  // Met à jour la page active chaque fois que l'emplacement change
  React.useEffect(() => {
    setActivePage(location.pathname);
  }, [location]);

  return (
    <header className="header">
      <div className="navbar">
        <h1>
          <img src={Logoheader} className="logoKasa" alt="logo de kasa"></img>
        </h1>
        <div className="navFlex">
          <Link
            to="/"
            className={`navLink ${activePage === "/" ? "active" : ""}`}
          >
            Accueil
          </Link>
          <Link
            to="/propos"
            className={`navLink ${activePage === "/propos" ? "active" : ""}`}
          >
            À propos
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;