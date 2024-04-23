import React from "react";
import "./Navbar.css";


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
        <img src="https://coincap.io/static/logos/black.svg" alt="Coincap Logo" className="logo" />
          
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


