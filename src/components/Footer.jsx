import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Mahoe • Tous droits réservés</p>
        <p>
          Contact :{" "}
          <a href="mailto:mahoe.pllx@icloud.com">mahoe.pllx@icloud.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
