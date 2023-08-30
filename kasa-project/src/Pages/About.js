import React from "react";
import Banner from "../components/Banner";
import Bannerabout from "../assets/AboutBanner.jpg";
import Topbar from "../components/Topbar";

function About() {
  return (
    <div>
       <Banner src={Bannerabout}  title = {""}/> 
       <Topbar/>
    </div>
      
     
    
  );
}

export default About;