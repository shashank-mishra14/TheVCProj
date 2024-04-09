import React, { useEffect, useState } from "react";
import "./Homepage.css";
import Accordion from "../Accordion/Accordion";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Marquee from "react-fast-marquee";
import Slider from "./Carousel";
// import Modal from "./Modal";


const slides = [
  { url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/1.png", title: "beach" },
  { url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/2.png", title: "boat" },
  { url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/3.png", title: "forest" },
  { url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/4.png", title: "city" },
  { url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/5.png", title: "italy" },
  { url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/6.png", title: "italy" },
  { url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/7.png", title: "italy" },
  { url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/8.png", title: "italy" },
  { url: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/9.png", title: "italy" },
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
                  cut your research time in half. let us find you relevant
                  
                  reports <br /> about India.
                </h1>
              </div>

              <Link to="/reportspage">
                <button>browse reports</button>
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
          <h2 className="heading-container">
            explore reports by
          </h2>

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
      <div className="card1-container">
        {/* <h2 className="heading2">THE VC PROJECT</h2> */}
        <h1 className="paragraph">
          India’s largest reports repository for making sense
          <br />
          of opportunities in{" "}
          <img
            className="svg-indian-flag"
            src="https://svgshare.com/i/14ST.svg"
            alt=""
          />
        </h1>
      </div>
      <div className="network-container">
        {/* <h3>Our network</h3>
        <p className="network-container-p">
          Tap into our highly vetted network
        </p> */}
        <div className="card3-container">
          <p className="card-paragraph-network">
            <ul className="unlisted">
              <li className="list-card">used for:</li>
              <li className="list-card">
              ● understanding the market size of sectors{" "}
              </li>
              <li className="list-card">
              ● growth potential in the coming years
              </li>
              <li className="list-card">
              ●{" "}
                <img
                  className="svg-flag"
                  src="https://svgshare.com/i/14ST.svg"
                  alt=""
                />
                vs 
                <img
                  className="svg-flag"
                  src="https://svgshare.com/i/14Qp.svg"
                  alt=""
                />{" "}
                vs 
                <img
                  className="svg-flag"
                  src="https://svgshare.com/i/14SH.svg"
                  alt=""
                />{" "}for different sectors
              </li>
              <li className="list-card">
              ● deep diving into sub-sectors within sectors
              </li>
              <li className="list-card">
              ● developing an understanding of the Indian{" "} <br />
                {" "} market and its sectors
              </li>
            </ul>
            
            <div className="button-class">
              <Link to="/reportspage">
                <button>Browse reports</button>
              </Link>
            </div>
          </p>

          <img
            className="card1-image"
            src="https://svgshare.com/i/13oU.svg"
            alt="icon"
          />
        </div>
        <h1 className="h1-madeforinvestors">
          Made for investors, founders and analysts.
          <br />
          Find your use case. Now.
          
        </h1>
        <hr className="network-border" />
        <div className="button-madefor">
          <Link to="/reportspage">
            <button>Browse reports</button>
          </Link>
        </div>
      </div>
      <div><Accordion /></div>
    </>
  
  );
};

export default Homepage;
