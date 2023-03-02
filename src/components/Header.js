import React from "react";
import logo from "../assets/HRnetlogo.webp";
import logoBrand from "../assets/HRnetbrandname.webp";
import "../style/header.css";
import { Link } from "react-router-dom";

const Img = (cn, src, alt) => <img className={cn} src={src} alt={alt} />;

const Header = () => {
  return (
    <header>
      <div className="logoNavbar">
        <img className="nav-logo" src={logo} alt="Wealth Health logo" />
        <img className="nav-brand" src={logoBrand} alt="Wealth Health brand" />
      </div>
      <nav className="navbar">
        <div className="">
          <h1>HRnet</h1>
          <Link to="/Employees">View Current Employees</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
