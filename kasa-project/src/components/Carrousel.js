import React, { useState } from "react";
import logementsData from "../data/logements.json";
import arrowLeft from "../assets/arrow_left.png";
import arrowRight from "../assets/arrow_right.png";

// Composant carrousel
function CarrouselSlide() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === logementsData[currentSlide].pictures.length - 1
        ? 0
        : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0
        ? logementsData[currentSlide].pictures.length - 1
        : prevSlide - 1
    );
  };

  const currentLogement = logementsData[currentSlide];
  const currentImage = currentLogement.pictures[currentSlide];
  const currentHost = currentLogement.host[currentSlide];

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
