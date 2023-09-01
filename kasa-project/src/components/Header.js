import React, { useState } from "react";
import Logoheader from "../assets/logo.jpg";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation(); 

 
  const [activePage, setActivePage] = useState("/"); 
 
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