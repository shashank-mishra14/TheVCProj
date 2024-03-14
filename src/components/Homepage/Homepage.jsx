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
        <div className="herosection">
          <div className="herosection-title">
            <h1 className="paragraph">Cut your research time in half. Let us find you relevant <br />reports about India. </h1>
            <div className="button-reports" >
            </div>
            <Link to="/reportspage">
            <button >
            Browse reports
            </button>
            </Link>
              <h2>Free forever, no sign-up needed</h2>
          </div>
        </div>
        <div className="svg-container">
          <h2 className="heading-container">
            Trusted by top startups and unicorns
          </h2>
          
            <Marquee style={{ width: "75%" }} className="marquee-container" speed={100}>
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
            <img src="https://svgshare.com/i/14MV.svg" alt="redseer" className="svg" />
            <img src="https://svgshare.com/i/14ME.svg" alt="temasek" className="svg"/>
            <img src="https://svgshare.com/i/14MF.svg" alt="yourstory" className="svg"/>
            <img src="https://svgshare.com/i/14MG.svg" alt="EY" className="svg"/>
            <img src="https://svgshare.com/i/14MH.svg" alt="google"className="svg" />
            <img src="https://svgshare.com/i/14LP.svg" alt="delloute" className="svg"/>
            <img src="https://svgshare.com/i/14KM.svg" alt="kaalari" className="svg"/>
            <img src="https://svgshare.com/i/14LQ.svg" alt="kpmg" className="svg"/>
            <img src="https://svgshare.com/i/14M_.svg" alt="blume" className="svg"/>
            <img src="https://svgshare.com/i/14M5.svg" alt="bnc" className="svg"/>
            <img src="https://svgshare.com/i/14Kh.svg" alt="elevation" className="svg"/>
            <img src="https://svgshare.com/i/14M6.svg" alt="bcg" className="svg"/>
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
        {/* <div className="card2-container">
          <div className="card2">
            <div className="card2-text">
              <h3>Read</h3>
              <p>
                Gain access to library of 1000+
                <br />
                reports across 100+
                <br />
                industries, providing comprehensive
                <br />
                analyses.
              </p>
            </div>
            <div className="card2-image">
              <img src="https://svgshare.com/i/13nn.svg" alt="icon" />
            </div>
          </div>
          <div className="card2">
            <div className="card2-text">
              <h3>Publish</h3>
              <p>
                Gain access to library of 1000+
                <br />
                reports across 100+
                <br />
                industries, providing comprehensive
                <br />
                analyses.
              </p>
            </div>
            <div className="card2-image">
              <img src="https://svgshare.com/i/13pM.svg" alt="icon" />
            </div>
          </div>
          <div className="card2">
            <div className="card2-text">
              <h3>Connect</h3>
              <p>
                Gain access to library of 1000+
                <br />
                reports across 100+
                <br />
                industries, providing comprehensive
                <br />
                analyses.
              </p>
            </div>
            <div className="card2-image">
              <img src="https://svgshare.com/i/13oU.svg" alt="icon" />
            </div>
          </div>
        </div> */}
      </div>
      <div className="network-container">
        <h3>Our network</h3>
        <p className="network-container-p">
          Tap into our highly vetted network
        </p>
        <div className="card3-container">
          <p className="card-paragraph-network">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />
            Sit obcaecati ut deserunt! Sit illo asperiores <br />
            iusto facilis eaque aut
            <br />
            hic inventore aspernatur provident?
            <br /> Omnis ducimus perspiciatis id nihil earum ut!
            <h1>Reports...</h1>
          </p>

          <img
            className="card1-image"
            src="https://svgshare.com/i/13oU.svg"
            alt="icon"
          />
        </div>
        <div className="card3-container">
          

          <img
            className="card1-image"
            src="https://svgshare.com/i/13oU.svg"
            alt="icon"
          />
          <p className="card-paragraph-network">
          <ul>
  <li>Understanding the market size of sectors</li>
  <li>Growth potential in the coming years</li>
  <li>India vs China vs USA for different sectors</li>
  <li>Deep Diving into sub-sectors within sectors</li>
  <li>Developing an understanding of the Indian market and its sectors.</li>
</ul>

            <h1>Reports...</h1>
          </p>
        </div>
        <h1 className="h1-madeforinvestors"> 
        Made for investors, founders, analysts, students  
      <br />
      Find your use case. Now.

        </h1>
        <div>
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default Homepage;
