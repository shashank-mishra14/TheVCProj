import React, { useState } from "react";
import "./Homepage.css";
import Accordion from "../Accordion/Accordion";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Marquee from "react-fast-marquee";
import Slider from "./Slider";
import ReportCard from "../ReportCard/ReportCard";
// import Modal from "./Modal";
import Card from "../Card";
import Modal from "./Modal";
import './Modal.css';
const topReportsData = [
  {
    img: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/3.png",
    title: "Marketplaces Unleashed: Fuelling India’s $200B Consumer Spending Surge",
    companyName: "Elevation Capital",
    subcategory: "Marketplaces",
    category: "Consumer Tech",
    year: 2022,
    // month: "January",
    link: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/Reports/Elevation/Marketplaces%20Unleashed%20Consolidated%20Presentation.pdf",
  },
  {
    img: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/15.png",
    title: "Indus Valley Annual Report 2023",
    companyName: "Blume Ventures",
    subcategory: "Indian Consumer",
    category: "Consumer Tech",
    // month: "January",
    year: "2023",
    link: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/Reports/BlumeVentures/Indus%20Valley%20Annual%20Report%202023.pdf",
  },
  {
    img: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/NEWTHUMBNAILS/194.jpg",
    title: "Code to Credit - A thesis on Digital Lending in India",
    companyName: "Eximus Ventures",
    subcategory: "Lending",
    category: "Financial Services",
    // month: "January",
    year: "2024",
    link: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/Reports/EXIMUS/Code-to-Credit_Digital-Lending-Thesis_updated.pdf",
  },
  {
    img: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/NEWTHUMBNAILS/192.jpg",
    title: " DSG Consumer Partners 2024 Sustainability Report",
    companyName: "DSG Consumer Partners",
    subcategory: "ESG",
    category: "Climate & Sustainability",
    // month: "January",
    year: "2023",
    link: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/Reports/DSG/DSGC%202024%20SUSTAINABILITY%20REPORT%20.pdf",
  },
  {
    img: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/NEWTHUMBNAILS/200.jpg",
    title: "Stride Ventures- India Venture Debt Report 2022",
    companyName: "Stride Ventures",
    subcategory: "Venture Debt",
    category: "Financial Serivces",
    // month: "January",
    year: "2022",
    link: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/Reports/STRIDEVENTURES/Stride+Ventures+India+Debt+Report+2022.pdf",
  },
  {
    img: "https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/17.png",
    title: "The Omega Files: Look Into Blume's Fund I Returns",
    companyName: "Blume Ventures",
    subcategory:"VC Returns",
    category: "Venture Capital & Private Equity",
    year:"2023",
    link:"https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/Reports/BlumeVentures/The%20Omega%20Files_%20Episode%201.pdf"
  }
  // Add more dummy report data as needed...
];


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
  const [showModal, setShowModal] = useState(false);
const [linkToShow, setLinkToShow] = useState("");

const toggleModal = (show, link) => {
  setShowModal(show);
  setLinkToShow(link);
};
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
        <h2>Tool to research about India and markets within it</h2>
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
            <img className="image-card"src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/Homepage/1.webp" alt="" />
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
                <button className="browsereportsbutton4">
                  View Reports &#8594;
                </button>
              </Link>
        <div className="card-section1_1">
          <div className="card-section1_1_2_1">
            <img src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/thumbnails/Homepage/2.webp" alt="" className="image-card" />
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
              Market sizing, white spaces,
              key players, <br /> sub sectors within industries.
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
              Building view on a industry, multiple lens, <br /> trends, pattern
              matching... tight!
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
            Why <span className="highlighted-text">use</span> this ?
          </h1>
          <p className="compo-para">
            Let your users know about solutions, benefits and features that you
            provide{" "}
          </p>
          </div>
          <div className="card-components-1">
            <div className="card-components-1-1">
              <div className="cloud1">
                <ion-icon name="time" size="large"></ion-icon>
              </div>
              <h1> Time</h1>
              <p class="research">Researchiblity + speed</p>
            </div>
            <div className="card-components-1-1">
              <div className="cloud">
                <ion-icon name="compass" size="large"></ion-icon>
              </div>
              <h1 className="compro">Comprehensive</h1>
              <p className="research2">Extensive coverage, ever expanding repository</p>
            </div>
            <div className="card-components-1-1">
              <div className="cloud3">
                <ion-icon name="rocket" size="large"></ion-icon>
              </div>
              <h1>Hassle-free!</h1>
              <p className="research1">No managing of reports, no downloading of reports</p>
            </div>
          </div>
        </div>
        <div className="top-reports">
          <div className="top_reports">

          <h1>Popular Reports</h1>
          <Link to="/Reports">
                <button className="browsereportsbutton3">
                  View Reports &#8594;
                </button>
              </Link>
          </div>
          
          <div className="reports-top" id="reportsContainer">
        {topReportsData.map((report, index) => (
          <Card
            key={index}
            {...report}
            showModal={showModal}
            toggleModal={toggleModal}
          />
        ))}
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          linkToShow={linkToShow}
        />
      )}
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
          <button>Join us</button>
        </div>
      </div>
    </>
  );
};

export default Homepage;
