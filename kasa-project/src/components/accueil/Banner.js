import React from "react";
import Bannierehome from "../../assets/HomeBanner.jpg";

function Banner() {
  return (
    
      <div className="banner-home">
        <img
          src={Bannierehome}
          className="banner-img"
          alt="banniere-acceuil"
        ></img>
        <p className="banner-title">Chez vous, partout et ailleurs</p>
      </div>
    
  );
}
export default Banner;
