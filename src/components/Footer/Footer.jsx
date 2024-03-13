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
                <li></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="/contact">Contact us</a>
                  <a href="/faqs">FAQ</a>
                </li>
                <li></li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <hr />
          <p className="para-footer">
            *This Project in no way intends to benefit by re-distribution or
            copying of author's report. 
            This is purely for information & ease purposes.<br/> 
            If you'd rather not have your report listed here, please contact us
            to get it removed within 48 Hours.
          </p>
          <p>© 2024 The VC Project | All rights reserved</p>
         
        </div>
      </footer>
    </div>
  );
};

export default Footer;
