import React from "react";
import Bannierehome from "../../assets/HomeBanner.jpg";

function Accueil() {
  return (
    <main className="banner-home">
      <img
        src={Bannierehome}
        className="banner-img"
        alt="banniere-acceuil"
      ></img>
      <p className="banner-title">Chez vous, partout et ailleurs</p>
    </main>
  );
}
export default Accueil;
