import React from "react";
import Logement from "../data/logements.json";
import { Link } from "react-router-dom";


//container des cards logements
function Contenair() {
  return (
    <section className="contenair-card">
      {Logement.map((item) => (
        <Link to={`/logement/${item.id}`} key={item.id} className="card"> 
          <div className="filter-card" />
          <div className="title-card">
            <h2>{item.title}</h2>
            <p>{item.location}</p>
          </div>
          <img src={item.cover} alt={item.title} />
        </Link>
      ))}
    </section>
  );
}

export default Contenair;