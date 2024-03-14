import React from "react";
import "./Homepage.css";
import Accordion from "../Accordion/Accordion";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Marquee from "react-fast-marquee";
const Homepage = () => {
  return (
    <>
      <div className="main">
        <div className="herosection-main">
        <div className="herosection">
          <div className="herosection-title">
            <h1 className="paragraph">
              Cut your research time in half. Let us find you relevant <br />
              reports about India.{" "}
            </h1>
            
            <Link to="/reportspage">
              <button>Browse reports</button>
            </Link>
            <h2>Free forever, no sign-up needed</h2>
          </div>
        </div>
        <div className="herosection">
        <Marquee
            style={{ width: "85%" }}
            className="marquee-container"
            speed={50}
          >
            <div className="imgs">
             <img className="imgs-marquee" src="https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445336/H1_vigsqy.png" alt="" />
             <img className="imgs-marquee"src="https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445338/H7_ygygmt.png" alt="" />
             <img className="imgs-marquee"src="https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445347/H6_hezpi9.png" alt="" />
             <img className="imgs-marquee"src="https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445345/H2_icbr9z.png" alt="" />
             <img className="imgs-marquee"src="https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445333/H3_sqixdt.png" alt="" />
             <img className="imgs-marquee"src="https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445333/H8_pm0pzr.png" alt="" />
             <img className="imgs-marquee"src="https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445334/H5_wqdidu.png" alt="" />
             <img className="imgs-marquee"src="https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445336/H4_xkrgig.png" alt="" />
             <img className="imgs-marquee"src="https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445334/H9_rmxrdh.png" alt="" />
            </div>
          </Marquee>
        </div>
        </div>
        
        <div className="svg-container">
          <h2 className="heading-container">
            Trusted by top startups and unicorns
          </h2>

          <Marquee
            style={{ width: "75%" }}
            className="marquee-container"
            speed={100}
          >
            <div className="svg-logos">
              <img
                src="https://svgshare.com/i/14Ku.svg"
                alt="chiratae"
                className="svg-chiratae"
              />
              <img
                src="https://svgshare.com/i/14Lk.svg"
                alt="avendus"
                className="svg-avendus"
              />
              <img
                src="https://svgshare.com/i/14L2.svg"
                alt="matrix"
                className="svg-matrix"
              />
              <img
                src="https://svgshare.com/i/14L_.svg"
                alt="mckinsey"
                className="svg-mckinsey"
              />
              <img
                src="https://svgshare.com/i/14MU.svg"
                alt="peak"
                className="svg-peak"
              />
              <img
                src="https://svgshare.com/i/14Kg.svg"
                alt="pwc"
                className="svg-pwc"
              />
              <img
                src="https://svgshare.com/i/14MV.svg"
                alt="redseer"
                className="svg-redseer"
              />
              <img
                src="https://svgshare.com/i/14ME.svg"
                alt="temasek"
                className="svg-temasek"
              />
              <img
                src="https://svgshare.com/i/14MF.svg"
                alt="yourstory"
                className="svg"
              />
              {/* <img src="https://svgshare.com/i/14MG.svg" alt="EY" className="svg"/> */}
              <img
                src="https://svgshare.com/i/14MH.svg"
                alt="google"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14LP.svg"
                alt="delloute"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14KM.svg"
                alt="kaalari"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14LQ.svg"
                alt="kpmg"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14M_.svg"
                alt="blume"
                className="svg-blume"
              />
              <img
                src="https://svgshare.com/i/14M5.svg"
                alt="bnc"
                className="svg-bnc"
              />
              <img
                src="https://svgshare.com/i/14Kh.svg"
                alt="elevation"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14M6.svg"
                alt="bcg"
                className="svg-bcg"
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
          of opportunities in India.
        </h1>
      </div>
      <div className="network-container">
        {/* <h3>Our network</h3>
        <p className="network-container-p">
          Tap into our highly vetted network
        </p> */}
        <div className="card3-container">
          <p className="card-paragraph-network">
            <ul>
              <li className="list-card">Used for:</li>
              <li className="list-card">1. Understanding the market size of sectors </li>
              <li className="list-card">2. Growth potential in the coming years</li>
              <li className="list-card">3. India vs China vs USA for different sectors</li>
              <li className="list-card">4. Deep Diving into sub-sectors within sectors</li>
              <li className="list-card">5. Developing an understanding of the Indian <br />market and its sectors</li>
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
        <hr className="network-border"/>
        <div>
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default Homepage;
