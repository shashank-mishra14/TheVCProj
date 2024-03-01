import React from "react";
import "./Homepage.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="homepage-main">
        <div className="homepage-logo"></div>
      Homepage
      <div className="homepage-navbar">
        <div>Reports</div>
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Pricing</div>
      </div>
    </div>
  );
};

export default Homepage;
