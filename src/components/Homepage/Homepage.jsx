import React, { useEffect, useState } from "react";
import "./Homepage.css";
import Accordion from "../Accordion/Accordion";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Marquee from "react-fast-marquee";
import Slider from "./Carousel";
// import Modal from "./Modal";

const slides = [
  {
    url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/1.png",
    title: "beach",
  },
  {
    url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/2.png",
    title: "boat",
  },
  {
    url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/3.png",
    title: "forest",
  },
  {
    url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/4.png",
    title: "city",
  },
  {
    url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/5.png",
    title: "italy",
  },
  {
    url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/6.png",
    title: "italy",
  },
  {
    url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/7.png",
    title: "italy",
  },
  {
    url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/8.png",
    title: "italy",
  },
  {
    url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/9.png",
    title: "italy",
  },
];

const Homepage = () => {
  return (
    <>
      <div className="main">
        <div className="herosection-main">
          <div className="herosection">
            <div className="herosection-title">
              <div className="cutyour">
                <h1>
                  Get all <span class="highlighted-text">reports</span> about
                  India in one place
                  <p className="para_cutyour">
                    India is booming, We help you make sense of different
                    sectors <br /> in its multi-country country.
                  </p>
                </h1>
              </div>

              <Link to="/Reports">
                <button className="browsereportsbutton">
                  View Reports &#8594;
                </button>
              </Link>
              <h2>free forever, no sign-up needed</h2>
            </div>
          </div>
          <div className="herosection-marquee">
            <div className="imgs">
              <div className="containerStyles">
                <Slider slides={slides} />
              </div>
            </div>
          </div>
        </div>
        <div className="svg-container">
          <h2 className="heading-container">explore reports by</h2>

          <Marquee
            style={{ width: "75%" }}
            className="marquee-container"
            speed={35}
            gradient={true}
            gradientWidth={70}
          >
            <div className="svg-logos">
              <img
                src="https://svgshare.com/i/14Wu.svg"
                alt="chiratae"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14YY.svg"
                alt="avendus"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14ZE.svg"
                alt="matrix"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14ZF.svg"
                alt="mckinsey"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14ZB.svg"
                alt="peak"
                className="svg"
              />

              <img
                src="https://svgshare.com/i/14_H.svg"
                alt="redseer"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14_J.svg"
                alt="temasek"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14ZD.svg"
                alt="yourstory"
                className="svg"
              />
              {/* <img src="https://svgshare.com/i/14MG.svg" alt="EY" className="svg"/> */}
              <img
                src="https://svgshare.com/i/14Z2.svg"
                alt="google"
                className="svg"
              />

              <img
                src="https://svgshare.com/i/14_R.svg"
                alt="blume"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14_G.svg"
                alt="bnc"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14_a.svg"
                alt="elevation"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14ZC.svg"
                alt="bcg"
                className="svg"
              />
            </div>
          </Marquee>
        </div>
      </div>
      <div className="new-section">
        <h1>Why do this?</h1>
        <h3>
          We know the job of research is not easy. Countless hours, deadends,
          irrelevant material, subpar resources, shady website, $$, wrong 
          information, pretty presentations. We want to make the job enjoyable:
          best reports, fast. That's it.
        </h3>
        <h1>What motivates us? </h1>
        <p> reading reports, having fun, late nights- in that order</p>
      </div>
      <div className="card1-container">
        {/* <h2 className="heading2">THE VC PROJECT</h2> */}
        <h1 className="paragraph">
          How <span className="highlighted-text">The VC Project</span> can be
          used
        </h1>
        <h2>It's a tool to research about India and markets within it</h2>
      </div>
      <div className="card-section">
        <div className="card-section1_1">
          <div className="div-border">
            <h1>
              Understanding <br />
              sectors in depth
            </h1>
            <h2>
              Collate reports of all sectors, reputed <br />
              authors, quantity over quality.
            </h2>
          </div>
          <div className="card-section1_1_2">
            <img className="image-card"src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/WhatsApp%20Image%202024-05-02%20at%2023.14.13_55a07659.jpg" alt="" />
            {/* <span>What we offer</span>
            <p>
              Collate reports of all sectors, reputed authors, <br /> quantity
              over quality
            </p>
            <h2>We Offer</h2>
            <span>132 templates</span> */}
          </div>
          
        </div>
        <Link to="/Reports">
                <button className="browsereportsbutton1">
                  View Reports &#8594;
                </button>
              </Link>
        <div className="card-section1_1">
          <div className="card-section1_1_2_1">
            <img src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/WhatsApp%20Image%202024-05-02%20at%2023.14.13_0b397a07.jpg" alt="" className="image-card" />
            {/* <div className="div-card1_1">
              <h1>Card Title</h1>
              <p>
                You can easily change text and typography, icons, illustrations
              </p>
            </div>
            <div className="div-card1_1">
              <h1>Card Title</h1>
              <p>
                You can easily change text and typography, icons, illustrations
              </p>
            </div>
            <div className="div-card1_1">
              <h1>Card Title</h1>
              <p>
                You can easily change text and typography, icons, illustrations
              </p>
            </div> */}
          </div>
          <div className="card-section1_1_4">
            <h1>
              Industry landscape
            </h1>
            <span>
              market sizing, white spaces,
              <br /> key players, sub sectors <br /> within industries
            </span>
          </div>
        </div>
        <Link to="/Reports">
                <button className="browsereportsbutton2">
                  View Reports &#8594;
                </button>
              </Link>
        <div className="card-section1_1_5">
          <div className="card-section1_1_5_6">
            <h1>PoVs</h1>
            <h2>
              building view on a industry, multiple lens, <br /> trends, pattern
              matching.. tight!
            </h2>
          </div>
          <div className="card-section1_1_3">
            <img  className="image-card"src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/WhatsApp%20Image%202024-05-02%20at%2023.14.13_5c04194f.jpg" alt="" />
            {/* <span>What we offer</span>
            <p>
              Save time and effort building apps with our fully functional and
              customizable templates.
            </p>
            <h2>We Offer</h2>
            <span>132 templates</span> */}
          </div>
        </div>
        <Link to="/Reports">
                <button className="browsereportsbutton1">
                  View Reports &#8594;
                </button>
              </Link>
        <div className="card-components">
          <div className="why-to-use">

          <h1>
            Why <span className="highlighted-text">Use</span> this ?
          </h1>
          <p className="compo-para">
            Let your users know about solutions, benefits and features that you
            provide{" "}
          </p>
          </div>
          <div className="card-components-1">
            <div className="card-components-1-1">
              <div className="cloud">
                <ion-icon name="cloud" size="large"></ion-icon>
              </div>
              <h1> Time</h1>
              <p className="reasearch">Researchiblity + speed</p>
            </div>
            <div className="card-components-1-1">
              <div className="cloud">
                <ion-icon name="terminal" size="large"></ion-icon>
              </div>
              <h1>Comphrensive</h1>
              <p>Extensive coverage, ever expanding repository</p>
            </div>
            <div className="card-components-1-1">
              <div className="cloud">
                <ion-icon name="shuffle" size="large"></ion-icon>
              </div>
              <h1>Hassle-free!</h1>
              <p>no managing of reports, no downloading of reports</p>
            </div>
          </div>
        </div>
        <div className="top-reports">
          <h1>Top Reports</h1>
          <div className="reports-top" id="reportsContainer">
            <div className="cards-reports">
              <img
                className="report-thumbnail"
                src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/1.png"
                alt=""
              />
              <h2>Eaty | $299</h2>
              <p>
                Eaty is a no-code template for food delivery. It comes with a
                responsive user ap...
              </p>
            </div>
            <div className="cards-reports">
              <img
                className="report-thumbnail"
                src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/1.png"
                alt=""
              />
              <h2>Eaty | $299</h2>
              <p>
                Eaty is a no-code template for food delivery. It comes with a
                responsive user ap...
              </p>
            </div>
            <div className="cards-reports">
              <img
                className="report-thumbnail"
                src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/1.png"
                alt=""
              />
              <h2>Eaty | $299</h2>
              <p>
                Eaty is a no-code template for food delivery. It comes with a
                responsive user ap...
              </p>
            </div>
            <div className="cards-reports">
              <img
                className="report-thumbnail"
                src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/1.png"
                alt=""
              />
              <h2>Eaty | $299</h2>
              <p>
                Eaty is a no-code template for food delivery. It comes with a
                responsive user ap...
              </p>
            </div>
            <div className="cards-reports">
              <img
                className="report-thumbnail"
                src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/1.png"
                alt=""
              />
              <h2>Eaty | $299</h2>
              <p>
                Eaty is a no-code template for food delivery. It comes with a
                responsive user ap...
              </p>
            </div>
            <div className="cards-reports">
              <img
                className="report-thumbnail"
                src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/1.png"
                alt=""
              />
              <h2>Eaty | $299</h2>
              <p>
                Eaty is a no-code template for food delivery. It comes with a
                responsive user ap...
              </p>
            </div>
            <div className="cards-reports">
              <img
                className="report-thumbnail"
                src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/1.png"
                alt=""
              />
              <h2>Eaty | $299</h2>
              <p>
                Eaty is a no-code template for food delivery. It comes with a
                responsive user ap...
              </p>
            </div>
            <div className="cards-reports">
              <img
                className="report-thumbnail"
                src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/1.png"
                alt=""
              />
              <h2>Eaty | $299</h2>
              <p>
                Eaty is a no-code template for food delivery. It comes with a
                responsive user ap...
              </p>
            </div>
          </div>
        </div>
        <div>
          <Accordion />
        </div>
        <div className="connect-component">
          <h1>Making <span className="highlighted-text">knowledge</span> accessible</h1>
          <h2>Get access to exclusive meetups and new reports</h2>
          <input
            className="input-card-email"
            type="email"
            placeholder="ayush.m@redseerconsulting.com"
          />
          <div></div>
          {/* <h2>Your message</h2>
          <input
            className="input-card-message"
            type="email"
            placeholder="Write Message"
          /> */}
          <button>Join Us</button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
