import React, { useState } from "react";
import Logement from "../data/logements.json";
import { Link } from "react-router-dom";
import CarrouselSlide from "./Carrousel";

function Contenair() {
  const [selectedLogementId, setSelectedLogementId] = useState(null);

  const handleLogementSelect = (logementId) => {
    setSelectedLogementId(logementId);
  };

  return (
    <section className="contenair-card">
      {Logement.map((item) => (
        <div key={item.id} className="card">
          <Link to={`/logement/${item.id}`} className="card-link">
            <div className="filter-card" />
            <div className="title-card">
              <h2>{item.title}</h2>
              <p>{item.location}</p>
            </div>
            <img src={item.cover} alt={item.title} />
          </Link>
          <button onClick={() => handleLogementSelect(item.id)}>
            Voir le carrousel
          </button>
        </div>
      ))}

      {selectedLogementId && (
        <CarrouselSlide logementId={selectedLogementId} />
      )}
    </section>
  );
}

export default Contenair;