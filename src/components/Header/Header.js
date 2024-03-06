import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="main">
      <div className="homepage-main">
        <div className="homepage-navbar-container">
          <div className="homepage-logo">
            <h3 className="vcproject" >
            <Link to="/">The VC Project</Link>
            </h3>
          </div>
          <div className="homepage-navbar">
            <div className="lol">
              <Link to="/">Home</Link>
            </div>
            <div className="lol">
            <Link to="/reportspage">Reports</Link>
              </div>
            <div className="lol">
              <Link to="/contact">Contact us</Link>
            </div>
            <div className="lol">FAQs</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
