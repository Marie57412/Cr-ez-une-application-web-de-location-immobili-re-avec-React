import React from "react";
import logementData from "../src/data/logements.json";
import CarrouselSlide from "./components/Carrousel";
import TopbarItem from "./components/TopbarItem";

// Composant de la page logements
function Logement() {
  return (
    <div>
      <div>
        <CarrouselSlide />
      </div>
      <div className="topbar-container">
        <TopbarItem text="Description" />
        <TopbarItem text="Equipements" />
      </div>
      <div className="host">
        
      </div>
    </div>
  );
}

export default Logement;
