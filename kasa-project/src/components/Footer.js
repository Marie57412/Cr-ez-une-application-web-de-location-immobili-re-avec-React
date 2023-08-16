import React from "react";
import logoFooter from "../assets/logo-footer.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logoFooter} className="footer-img" alt="logo-kasa"></img>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
