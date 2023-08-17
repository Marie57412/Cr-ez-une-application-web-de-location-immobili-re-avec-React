import React from "react";
import Logement from "../../data/logements.json";

function Contenair() {
  return (
    <section className="contenair-card">
      {Logement.map((item) => (
        <div className="card" key={item.id}> {/* Clé déplacée ici */}
          <div className="filter-card" />
          <div className="title-card">
            <h2>{item.title}</h2>
            <p>{item.location}</p>
          </div>

          <img src={item.cover} alt={item.title} />
          <div className="pictures">
            {item.pictures.map((picture, index) => (
              <img key={index} src={picture} alt={`Picture ${index + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

export default Contenair;
