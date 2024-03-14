import React from "react";
import "./Homepage.css";
import Accordion from "../Accordion/Accordion";
import Footer from "../Footer/Footer";
import Marquee from "react-fast-marquee";
const Homepage = () => {
  return (
    <>
      <div className="main">
        <div className="svg-container">
          <h2 className="heading-container">
            Trusted by top startups and unicorns
          </h2>
          
            <Marquee style={{ width: "75%" }} className="marquee-container" speed={100}>
          <div className="svg-logos">
            <img
              src="https://svgshare.com/i/147P.svg"
              alt="icon"
              className="svg" 
            />
            <img
              src="https://svgshare.com/i/1487.svg"
              alt="icon"
              className="svg"
            />
            <img
              src="https://svgshare.com/i/1499.svg"
              alt="icon"
              className="svg"
            />
            <img
              src="https://svgshare.com/i/148g.svg"
              alt="icon"
              className="svg"
            />
            <img
              src="https://svgshare.com/i/147a.svg"
              alt="icon"
              className="svg"
            />
            <img
              src="https://svgshare.com/i/149A.svg"
              alt="icon"
              className="svg"
            />
            <img src="https://svgshare.com/i/148h.svg" alt="" className="svg" />
            <img src="https://svgshare.com/i/147Q.svg" alt="" className="svg"/>
            <img src="https://svgshare.com/i/146g.svg" alt="" className="svg"/>
            <img src="https://svgshare.com/i/148K.svg" alt="" className="svg"/>
            <img src="https://svgshare.com/i/147F.svg" alt=""className="svg" />
            <img src="https://svgshare.com/i/147n.svg" alt="" className="svg"/>
            <img src="https://svgshare.com/i/147s.svg" alt="" className="svg"/>
            <img src="https://svgshare.com/i/147o.svg" alt="" className="svg"/>
            <img src="https://svgshare.com/i/1488.svg" alt="" className="svg15"/>
            <img src="https://svgshare.com/i/149B.svg" alt="" className="svg"/>
            <img src="https://svgshare.com/i/148q.svg" alt="" className="svg"/>
            <img src="https://svgshare.com/i/1489.svg" alt="" className="svg"/>
          </div>
          </Marquee>
        </div>
      </div>
      <div className="card1-container">
        <h2 className="heading2">THE VC PROJECT</h2>
        <p className="paragraph">
          India's largest researches respository
          <br />
          for students
        </p>
        <div className="card2-container">
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
        </div>
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit <br />
            Sit obcaecati ut deserunt! Sit illo asperiores <br />
            iusto facilis eaque aut
            <br />
            hic inventore aspernatur provident?
            <br /> Omnis ducimus perspiciatis id nihil earum ut!
            <h1>Reports...</h1>
          </p>
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default Homepage;
