import React from "react";
import logo from "../assets/HRnetlogo.webp";
import logoBrand from "../assets/HRnetbrandname.webp";
import "../style/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="logoFooter">
        <img className="nav-logo" src={logo} alt="Wealth Health logo" />
        <img className="nav-brand" src={logoBrand} alt="Wealth Health brand" />
      </div>
      <p>Copyright 2023</p>
    </footer>
  );
};
export default Footer;
