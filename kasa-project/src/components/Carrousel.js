import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Importez useParams pour extraire l'ID de l'URL
import logementsData from "../data/logements.json";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";

// Composant carrousel
function CarrouselSlide() {
  const { logementId } = useParams(); // Utilisez useParams pour extraire l'ID de l'URL
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentLogement, setCurrentLogement] = useState(null);

  // Utilisez useEffect pour mettre à jour le logement actuel en fonction de l'ID
  useEffect(() => {
    const selectedLogement = logementsData.find((logement) => logement.id === logementId);
    if (selectedLogement) {
      setCurrentLogement(selectedLogement);
    }
  }, [logementId]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === currentLogement.pictures.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? currentLogement.pictures.length - 1 : prevSlide - 1
    );
  };

  if (!currentLogement) {
    // Gérer le cas où le logement n'a pas encore été chargé
    return <div>Loading...</div>;
  }

  const currentImage = currentLogement.pictures[currentSlide];

  return (
    <div className="carrousel-container">
      <img
        className="img-carrousel"
        src={currentImage}
        alt="imageAppartement"
      />

      <div className="btn-carrousel">
        <button className="leftButton" onClick={prevSlide}>
          <img src={arrowLeft} alt="Précédent" />
        </button>

        <button className="rightButton" onClick={nextSlide}>
          <img src={arrowRight} alt="Suivant" />
        </button>
      </div>

    </div>
  );
}

export default CarrouselSlide;