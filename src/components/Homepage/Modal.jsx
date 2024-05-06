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
            {/* <button className="button-x" onClick={handleCloseModal}>
              <X />
            </button> */}
            <div className="bg-modal"></div>
            <div class="circular-image">
              <img src="https://i.imghippo.com/files/Cu5dj1713803575.jpg" alt="Ayush" />
            </div>

            <div className="modal-card">
              <h1>Ayush requests your action to continue</h1>
              {/* <p className="modal-para">"Know whats happening in the VC ecosystem"</p> */}
              <form onSubmit={handleSubmit}>
                <div className="modalemail">
                  <label className="modal-email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <span>This information will be shared with Ayush.</span>
                </div>
                <button type="submit">Continue</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
