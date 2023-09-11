import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importez useParams pour extraire l'ID de l'URL
import logementsData from "./data/logements.json";
import CarrouselSlide from "./components/Carrousel";
import TopbarItem from "./components/TopbarItem";
import RatingStars from "./components/Rating";

// Composant de la page logements
function Logement() {
  const { logementId } = useParams(); // Utilisez useParams pour extraire l'ID de l'URL
  const [currentLogement, setCurrentLogement] = useState(null);

  useEffect(() => {
    const selectedLogement = logementsData.find(
      (logement) => logement.id === logementId
    );
    if (selectedLogement) {
      setCurrentLogement(selectedLogement);
    }
  }, [logementId]);

  return (
    <div>
      <div>
        <CarrouselSlide currentLogement={currentLogement} />
      </div>
      <RatingStars />
      <div className="topbar-container">
        <div className="topbar-carrousel">
          <TopbarItem text={currentLogement?.description} title="Description" />
          <TopbarItem text={currentLogement?.equipments} title="Equipements" />
        </div>
      </div>
    </div>
  );
}

export default Logement;
