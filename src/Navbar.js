import React from "react";
import "./Navbar.css";
import logo from "./coincap.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-group">
        <div className="nav-item">Coins</div>
        <div className="nav-item">Exchange</div>
        <div className="nav-item">INR</div>
      </div>

      <div className="nav-group" id="coincap">
        <div className="nav-item">
          <img src={logo} alt="Coincap Logo" className="logo" />
          Coincap
        </div>
      </div>

      <div className="nav-group">
        <div className="nav-item">English</div>
        <div className="nav-item">Search</div>
        <div className="nav-item">Setting</div>
      </div>
    </div>
  );
};

export default Navbar;
