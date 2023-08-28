import React from "react";
import Bannerhome from "../assets/HomeBanner.jpg";

function Banner(props) {

  const HomeBanner = props.src || Bannerhome
  
  return (
    <main>
      <div className="banner-home">
        <img
          src={HomeBanner}  // Utilisez la prop src pour l'URL de l'image
          className="banner-img"
          alt="banniere-acceuil"
        ></img>
        {props.title !== "" && <p className="banner-title">{props.title}Chez vous, partout et ailleurs</p>}
       
      </div>
      <div className="Flexcontent">
       
      </div>
    </main>
  );
}

export default Banner;
