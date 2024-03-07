import React, { useState } from "react";
import "./Accordion.css";
const dataCollection = [
  {
    question: "What is the VC Project?",
    answer:
      "This project is an initiative to help everybody find all the reports about India in one place. ",
  },
  {
    question:
      "What is the procedure for uploading my firm’s report onto this repository?",
    answer:
      "Please visit the Contact Us page and upload the reports there. Alternatively, you can drop the links or names of the reports- we will find the reports and upload those onto the portal as soon as possible. ",
  },
  {
    question: "Are all the reports about India covered in this?",
    answer:
      "No, we are working continuously to make it as comprehensive as possible. There are about ~700 credible reports about India written in the last 5 years as per our estimated. We are dedicating 2-3 hours every day to take this number to 700 as soon as possible from ~150 right now.  ",
  },
  {
    question: "How do you intend to earn from this?",
    answer:
      "No, we do not intend to monetize the reports. We believe this is the author’s Intellectual Property and they deserve full credit and associated benefits that come along with it. We attempt to get the reports into more hands- that’s it. It will always be free and open source. ",
  },
  {
    question: "How can I contribute to this project?",
    answer:`Three ways you can be a part of this:\n\n1. Telling us what reports we are missing or suggesting any interesting reports (Contact Us page)\n2. Sharing any feedback on how it can be made better for everybody to use (Contact Us page)\n3. Spreading the word - make it reach into more hands. (Your WhatsApp, Twitter, Linkedin:)\n\nAlong with that, please feel free to reach out to Ayush Mittal from RedSeer Strategy Consultants (at mittalayush740@gmail.com) or Linkedin to schedule a call and discuss more`,
}
,
  {
    question: "How do you choose which reports to upload?",
    answer:
      "We take into account the credibility of the author above everything else. We prefer reports from reputed consulting firms, investment banks, Venture capital firms, Private equity firms, and govt. Bodies.",
  },
];

function Accordion() {
  const [accordion, setActiveAccordion] = useState(-1);

  function toggleAccordion(index) {
    if (index === accordion) {
      setActiveAccordion(-1);
      return;
    }
    setActiveAccordion(index);
  }

  return (
    <>
      <div className="container-accordion">
        <div>
          <span className="accordion__title">Frequently asked questions</span>
          <h1>Let's answer some of your questions</h1>
        </div>
        <div className="accordion__faq">
          {dataCollection.map((item, index) => (
            <div key={index} onClick={() => toggleAccordion(index)}>
              <div className="accordion__faq-heading">
                <h3 className={accordion === index ? "active" : ""}>
                  {item.question}
                </h3>
                <div>
                  {accordion === index ? (
                    <span className="verticle">-</span>
                  ) : (
                    <span className="horizental">+</span>
                  )}
                </div>
              </div>
              <div>
                <p className={accordion === index ? "active" : "inactive"}>
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Accordion;
