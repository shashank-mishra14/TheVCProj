import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { X } from "lucide-react";
import "./Modal.css";

const Modal = ({ showModal, setShowModal, linkToShow }) => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef();

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);

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
          <div className="modal-container" ref={modalRef}>
            <div className="bg-modal" onClick={handleCloseModal}></div>
            <div class="circular-image">
              <img src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/ayushweb.webp" alt="Ayush" />
            </div>

            <div className="modal-card">
              <h1>Ayush requests your action to continue</h1>
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
                </div>
                <button className="modal-card-button" type="submit">Continue</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
