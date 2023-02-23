import React from "react";
import logo from "../assets/HRnetlogo.webp";
import logoBrand from "../assets/HRnetbrandname.webp";

const Header = () => {
  return (
    <header>
      <div className="">
        <img className="nav-logo" src={logo} alt="Wealth Health logo" />
        <img className="nav-brand" src={logoBrand} alt="Wealth Health brand" />
      </div>
      <nav className="navbar">
        <div className="">
          <h1>HRnet</h1>
          <span>View Current Employees</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
