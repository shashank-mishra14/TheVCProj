import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div className="tag">
            <div className="main-tag">The VC Project</div>
            <p className="main-para">
              India's largest research repository <br /> for students
            </p>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="/reportspage">Reports</a>
                </li>
                <li>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                <a href="/contact">Contact us</a>
                  <a href="/contact">FAQ</a>
                </li>
                <li>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
            

          </div>
        </div>

        <div class="footer-bottom">
        <hr />
          <p>© 2024 The VC Project | All rights reserved</p>
        </div>
      </footer>
      
    </div>
  );
};

export default Footer;
