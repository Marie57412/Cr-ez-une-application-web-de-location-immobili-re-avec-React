import React from "react";
import ArrowDown from "../assets/arrow_down.png";

function TopbarItem({ text }) {
  return (
    <div className="topbar-style">
      <p className="text-style">{text}</p>
      <img className="arrow-icon" src={ArrowDown} alt="fleche vers le bas" />
    </div>
  );
}

export default TopbarItem;