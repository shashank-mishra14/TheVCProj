import React, { useState } from "react";
import axios from "axios";
import { X } from "lucide-react";
import "./Modal.css";

const Modal = ({ showModal, setShowModal, linkToShow }) => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/addDetails", formData);
      setFormData({ email: "" });
      setSubmitted(true);
      setShowModal(false);
      window.open(linkToShow, "_blank"); // Open the link after form submission
    } catch (error) {
      console.error("Error submitting details:", error.message);
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal-main">
        <div className="modal-container">
          
          <div className="modal-card">
            <h1>Know what's buzzing <br />in &#x1F1EE;&#x1F1F3;</h1>
            <span className="get-some">Get access to exclusive mixers <br />and reports 🥂</span>
            <form onSubmit={handleSubmit}>
              <div className="modalemail">
                <label className="modal-email">** We do not spam and rarely email</label>
                <input
                  type="email"
                  placeholder="Business emails only"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
               
              </div>
              <button className="button-email"type="submit">Email my invite</button>
            </form>
            <div className="div-nothanks">
            <button className="button-cross" onClick={handleCloseModal}>No,thanks</button>
            </div>
            <h2>Buy ad space to promote your report</h2>
          </div>
         
          <div className="circular-image">
            <span className="img-text">Dayara Bukyal Trek, 2023</span>
            <img src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/image-modal.webp" alt="Ayush" />
          </div>
        </div>
      </div>
      
      )}
    </>
  );
};

export default Modal;
