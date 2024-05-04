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
                India's largest reports repository <br /> for investors, founders <br/>
                and analysts
              </p>
            </div>
            <div class="footer-col">
              <h4>Company</h4>
              <ul>
                <li>
                  <a className="footer-links" href="/reports">Reports</a>
                </li>
                <li></li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <a className="footer-links"href="/contact">Contact us</a>
                  <a className="footer-links" href="/faqs">FAQ</a>
                </li>
                <li></li>
                <li>
                  <a href="#"></a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <div className="footerdetails">

              <h4>Follow Us</h4>
              <ion-icon size="large"name="logo-linkedin"></ion-icon>
              <ion-icon  size="large" name="logo-twitter"></ion-icon>
              </div>
             
              <div className="send-details-footer">

             <input type="email" placeholder="Email..."/>
             <button className="send-button">Send</button>
              </div>
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
