import React from "react";
import ArrowUp from "../assets/arrow_up.png";
import logementData from "../data/logements.json";
import { useState } from "react";



function TopbarItem({ text, title }) {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div>
      <div className="topbar-style">
        <p className="text-style" onClick={handleToggle}>
          {title}
        </p>
        <img
          className={`arrow-icon ${isOpened ? "open" : ""}`}
          src={ArrowUp}
          alt="fleche"
          onClick={handleToggle}
        />
      </div>

      <div className={`container-collapse ${isOpened ? "active" : ""}`}>
        {typeof text === "string" && <p>{text}</p>}
        {Array.isArray(text) && (
          <ul>
            {text.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default TopbarItem;