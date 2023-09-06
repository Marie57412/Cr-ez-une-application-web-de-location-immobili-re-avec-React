import React from "react";
import CarrouselSlide from "./components/Carrousel";
import TopbarItem from "./components/TopbarItem";
import RatingStars from "./components/Rating";

// Composant de la page logements
function Logement() {
  return (
    <div>
      <div>
        <CarrouselSlide />
      </div>
      <RatingStars/>
      <div className="topbar-container">
        <div className="topbar-carrousel">
        <TopbarItem text="Description" />
        <TopbarItem text="Equipements" />
        </div>
   
      </div>
      
     
    </div>
  );
}

export default Logement;
