import React from "react";
import "./Homepage.css";
import Accordion from "../Accordion/Accordion";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Marquee from "react-fast-marquee";
import Slider from "./Carousel";

const slides = [
  { url: "https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445336/H1_vigsqy.png", title: "beach" },
  { url: "https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445338/H7_ygygmt.png", title: "boat" },
  { url: "https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445347/H6_hezpi9.png", title: "forest" },
  { url: "https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445345/H2_icbr9z.png", title: "city" },
  { url: "https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445333/H3_sqixdt.png", title: "italy" },
  { url: "https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445333/H8_pm0pzr.png", title: "italy" },
  { url: "https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445334/H5_wqdidu.png", title: "italy" },
  { url: "https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445336/H4_xkrgig.png", title: "italy" },
  { url: "https://res.cloudinary.com/djdzjr3a5/image/upload/v1710445334/H9_rmxrdh.png", title: "italy" },
];
const containerStyles = {
  width: "520px",
  height: "430px",
  margin: "0 auto",
  marginRight: "20px",
};
const Homepage = () => {
  return (
    <>
      <div className="main">
        <div className="herosection-main">
          <div className="herosection">
            <div className="herosection-title">
              <div className="cutyour">
                <h1>
                  Cut your research time in half. Let us find you relevant
                  
                  reports <br /> about India.
                </h1>
              </div>

              <Link to="/reportspage">
                <button>Browse reports</button>
              </Link>
              <h2>Free forever, no sign-up needed</h2>
            </div>
          </div>
          <div className="herosection-marquee">
            <div className="imgs">

          <div style={containerStyles}>
          <Slider slides={slides} />
          </div>
            </div>
        </div>
      </div>
        <div className="svg-container">
          <h2 className="heading-container">
            Trusted by top startups and unicorns
          </h2>

          <Marquee
            style={{ width: "85%" }}
            className="marquee-container"
            speed={100}
            gradient={true}
            gradientWidth={30}
          >
            <div className="svg-logos">
              <img
                src="https://svgshare.com/i/14Ku.svg"
                alt="chiratae"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14Lk.svg"
                alt="avendus"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14L2.svg"
                alt="matrix"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14L_.svg"
                alt="mckinsey"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14MU.svg"
                alt="peak"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14Kg.svg"
                alt="pwc"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14MV.svg"
                alt="redseer"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14ME.svg"
                alt="temasek"
                className="svg"
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
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14M5.svg"
                alt="bnc"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14Kh.svg"
                alt="elevation"
                className="svg"
              />
              <img
                src="https://svgshare.com/i/14M6.svg"
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
              <li className="list-card">Used for:</li>
              <li className="list-card">
                1. Understanding the market size of sectors{" "}
              </li>
              <li className="list-card">
                2. Growth potential in the coming years
              </li>
              <li className="list-card">
                3. India{" "}
                <img
                  className="svg-flag"
                  src="https://svgshare.com/i/14ST.svg"
                  alt=""
                />
                vs China
                <img
                  className="svg-flag"
                  src="https://svgshare.com/i/14Qp.svg"
                  alt=""
                />{" "}
                vs USA
                <img
                  className="svg-flag"
                  src="https://svgshare.com/i/14SH.svg"
                  alt=""
                />{" "}
                for different sectors
              </li>
              <li className="list-card">
                4. Deep Diving into sub-sectors within sectors
              </li>
              <li className="list-card">
                5. Developing an understanding of the Indian <br />
                market and its sectors
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
      </div>
      <div><Accordion /></div>
    </>
  
  );
};

export default Homepage;
