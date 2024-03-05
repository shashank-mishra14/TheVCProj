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
            <p>
              India's largest research repository <br /> for students
            </p>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Cookies Policies</a>
                </li>
                <li>
                  <a href="#">Privacy Policies</a>
                </li>
                <li>
                  <a href="#">Data Processing</a>
                </li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>

            <div class="footer-col">
              <h4>follow us</h4>
              <div class="social-links">
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
