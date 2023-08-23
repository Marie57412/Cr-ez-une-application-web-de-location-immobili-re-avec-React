import React from "react";
import Bannierehome from "../../assets/HomeBanner.jpg";
import Contenair from "./Contenair";

function Accueil() {
  return (
    <main>
    <div className="banner-home">
    
      <img
        src={Bannierehome}
        className="banner-img"
        alt="banniere-acceuil"
      ></img>
      <p className="banner-title">Chez vous, partout et ailleurs</p>
    </div>
    <div className="Flexcontent">

      <Contenair></Contenair>
      </div>
        
    
    </main>
    
  );
}
export default Accueil;
