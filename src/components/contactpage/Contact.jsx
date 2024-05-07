import React, { useState } from "react";
import { Link } from "react-router-dom";
import Accordion from "../Accordion/Accordion";
import "./Contact.css";
import Checkbox from '@mui/joy/Checkbox';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const checklistData = [
    {
      checklistQuery: "Want to report an issue",
    },
    {
      checklistQuery: "Want to suggest a feature",
    },
    {
      checklistQuery: "Want to suggest specific reports",
    },
    {
      checklistQuery: "Others",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setSubmitted(true);
  };

  return (
    <div className="container">
      <div className="headcontainer">
        <h1 className="h1">Contact us</h1>
        <h3 className="heading3">
          Please feel free to suggest reports, any features, and issues here!
        </h3>
      </div>

      <div className="left">
        <div className="container-right-small">
          {submitted ? (
            <div className="submitted-message">
              <p>Thank you for contacting us!</p>
              <Link to="/">  <button className="go-back-to-home-button" onClick={() => setSubmitted(false)}>Go back to home</button></Link>
            
            </div>
          ) : (
            <form className="form" action="http://localhost:5001/contactDetails" method="post" onSubmit={handleSubmit}>
              <div className="nameinput">
                <div className="name">
                  <label className="namechange" htmlFor="name">
                    Your Name
                  </label>
                  <input
                    className="inputname"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    placeholder="Name"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="email">
                <label className="mail" htmlFor="email">
                  Email
                </label>
                <input
                  className="inputmail"
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="checklistBox">
                {checklistData.map(({ checklistQuery }) => (
                  
                    <Checkbox 
                    label={checklistQuery}
                      type="checkbox"
                      id="checklist"
                      name="checklist"
                      value={checklistQuery}
                      className="checklist"
                    />
                    
                  
                ))}
              </div>

              <label className="messg" htmlFor="message">
                Tell us about your experience here
              </label>
              <div className="textarea">
                <textarea
                  className="textarea"
                  id="message"
                  name="message"
                  placeholder="Write your message here."
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>

              <div className="uploadform">
                <form action="http://localhost:5000/upload" method="post" encType="multipart/form-data" accept="document">
                  <label htmlFor="files"></label>
                  <input type="file" className="choosefile" name="document"/>
                  <button method="get" className="uploadbutton" type="file">
                    Upload Files
                  </button>
                </form>
              </div>

              <button className="submitbutton" type="submit">
                Submit
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="container-accordion">
        <Accordion />
      </div>
    </div>
  );
};

export default Contact;
