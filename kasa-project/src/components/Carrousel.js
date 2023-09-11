import React, { useState } from "react";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";

// Composant carrousel
function CarrouselSlide({ currentLogement }) {
  const [currentSlide, setCurrentSlide] = useState(0);

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
      <p className="number-caroussel">
        {currentSlide + 1} / {currentLogement.pictures.length}
      </p>

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