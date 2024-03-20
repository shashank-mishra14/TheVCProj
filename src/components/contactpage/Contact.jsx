import "./Contact.css";
import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    // {
    //   checklistQuery: "Want to share your experience?",
    // },
    // {
    //   checklistQuery: "Want to report a bug?",
    // },
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
    // You can handle form submission logic here, like sending data to a server
    console.log(formData);
    // Clear form fields after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container">
      <div className="headcontainer">
        {/* <h3 className="h3">Connect with Us</h3> */}

        <h1 className="h1">Contact us</h1>
        <h3 className="heading3">
        Please feel free to suggest reports, any features, and issues here!
        </h3>
      </div>

     
        <div className="left">
        
          <div className="container-right-small">
            <form className="form" onSubmit={handleSubmit}>
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
                  <label className="checklistItems" htmlFor="checklist">
                    <input
                      type="checkbox"
                      id="checklist"
                      name="checklist"
                      value={checklistQuery}
                      className="checklistInput"
                    />
                    {checklistQuery}
                  </label>
                ))}
              </div>
               
              <label className="messg" htmlFor="message">
                Tell us about your experience here
              </label>
              <div className="textarea">
                {" "}
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
          </div>
        
        </div>
      <div className="container-accordion"><Accordion /></div>
      
    </div>
  );
};
export default Contact;
