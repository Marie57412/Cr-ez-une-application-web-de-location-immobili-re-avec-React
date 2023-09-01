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

 
  const currentImage = logementsData[currentSlide].pictures[currentSlide];

  return (
    <div className="carrousel-container">
      <button onClick={prevSlide}><img src={arrowLeft}></img></button>
      <img src={currentImage} alt={logementsData[currentSlide].title} />
      <button onClick={nextSlide}><img src={arrowRight}></img></button>
    </div>
  );
}

export default CarrouselSlide;