import React from "react";
import TopbarItem from "./TopbarItem"; 

//Reutilisation du composant TopbarItem
function Topbar() {
  return (
    <div className="topbar-container">
      <TopbarItem text="Fiabilité" />  
      <TopbarItem text="Respect" />
      <TopbarItem text="Service" />
      <TopbarItem text="Sécurité" />
    </div>
  );
}

export default Topbar;