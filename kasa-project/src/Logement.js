import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Importez useParams pour extraire l'ID de l'URL
import logementsData from "./data/logements.json"; // Importez les données des logements (assurez-vous que le chemin soit correct)
import CarrouselSlide from "./components/Carrousel"; // Importez le composant de carrousel
import TopbarItem from "./components/TopbarItem"; // Importez le composant de barre supérieure
import RatingStars from "./components/Rating"; // Importez le composant d'étoiles de notation

// Composant de la page logements
function Logement() {
  const { logementId } = useParams(); // Utilisez useParams pour extraire l'ID de l'URL
  const [currentLogement, setCurrentLogement] = useState(null);
  const [titles, setTitles] = useState();
  const[locations, setLocation] = useState();

  useEffect(() => {
    const selectedLogement = logementsData.find(
      (logement) => logement.id === logementId
    );
    if (selectedLogement) {
      setCurrentLogement(selectedLogement);
      setTitles(selectedLogement.title);
      setLocation(selectedLogement.location); // Met à jour l'état du logement actuel avec les données chargées
      
    }
  }, [logementId]);

  return (
    <div>
      <div>
        {/* Affiche le composant de carrousel en passant le logement actuel en tant que prop */}
        <CarrouselSlide currentLogement={currentLogement} />
      </div>
      {/* Affiche le composant d'étoiles de notation */}

      
      
      
      <h1 className="title-logement">{titles}</h1>
      <p className="location-text">{locations}</p>
      <RatingStars />



      <div className="topbar-container">
        <div className="topbar-carrousel">
          {/* Affiche les éléments de la barre supérieure en passant les données du logement actuel en tant que props */}
          <TopbarItem text={currentLogement?.description} title="Description" />
          <TopbarItem text={currentLogement?.equipments} title="Equipements" />
        </div>
      </div>
    </div>
  );
}

export default Logement;
