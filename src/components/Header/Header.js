import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="main">
      <div className="homepage-main">
        <div className="homepage-navbar-container">
          <div className="homepage-logo">
            <h3>The VC Project</h3>
          </div>
          <div className="homepage-navbar">
            <div>
              <Link to="/reportspage">Reports</Link>
            </div>
            <div>About Us</div>
            <div>
              <Link to="/contact">Contact Us</Link>
            </div>
            <div>Pricing</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
