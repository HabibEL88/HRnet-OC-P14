import React from "react";
import logo from "../assets/HRnetlogo.webp";
import logoBrand from "../assets/HRnetbrandname.webp";
import "../style/header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <div className="logoNavbar">
        <img className="nav-logo" src={logo} alt="Wealth Health logo" />
        <img className="nav-brand" src={logoBrand} alt="Wealth Health brand" />
      </div>
      <nav className="navbar">
        <div className="">
          <h1>HRnet</h1>
          {location.pathname === "/" ? (
            <Link to={"/employees"}>View current Employees</Link>
          ) : (
            <Link to={"/"}>Home</Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
