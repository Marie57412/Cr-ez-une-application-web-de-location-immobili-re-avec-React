import React from "react";
import ArrowUp from "../assets/arrow_up.png";
import logementData from "../data/logements.json";
import { useState } from "react";
import { Collapse } from "react-collapse";


const textMapping = {
    Fiabilité: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    Respect: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    Service: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    Sécurité: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de  perturbation du voisinage entraînera une exclusion de notre plateforme.",
    Description: logementData[4].description,
    Equipements: logementData[8].equipments.map((equipment, index) => (
      <li key={index}>{equipment}</li>
    )),
  };
  
  function TopbarItem({ text }) {
    const [isOpened, setIsOpened] = useState(false);
  
    const handleToggle = () => {
      setIsOpened(!isOpened);
    };
  
    return (<div> 
      <div className="topbar-style">
        <p className="text-style" onClick={handleToggle}>
          {text}
        </p>
        <img
        className={`arrow-icon ${isOpened ? "open" : ""}`}
        src={ArrowUp}
        alt="fleche"
        onClick={handleToggle}
      />
         </div>
        <Collapse isOpened={isOpened}>
          <div className="content-about">{textMapping[text]}</div>
        </Collapse>
     
      </div>
    );
  }
  
  export default TopbarItem;
  