import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="main">
      <div className="homepage-main">
        <div className="homepage-navbar-container">
        
          <div className="homepage-logo">
          <Link to="/"> <img className="logo-vc"src="https://svgshare.com/i/14d2.svg"></img></Link>
          
            <h3 className="vcproject" >
            <Link to="/"> The VC Project</Link>
            </h3>
          </div>
          <div className="homepage-navbar">
            <div className="lol">
              <Link to="/">Home</Link>
            </div>
            <div className="lol">
            <Link to="/contact">Contact</Link>
              </div>
            <div className="lol">
              <Link to="/faqs">FAQs</Link>
            </div>
            <div className="made-for-investors-button">
            <Link to="/Reports">
               <span className="report-font">Reports</span></Link></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
