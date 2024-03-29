import React, { useState } from "react";
import "./Modal.css";
import axios from "axios";
import { X } from "lucide-react";

function Modal() {
  const [showModal, setShowModal] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    profession: ""
  });

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
      await axios.post("http://localhost:5000/addDetails", formData);
      // Clear form fields after successful submission
      setFormData({
        email: "",
        name: "",
        profession: ""
      });
      handleCloseModal(); // Close the modal after submission
    } catch (error) {
      console.error('Error submitting details:', error.message);
    }
  };

  return (
    <>
      {showModal && (
        <div className="modal-main">
          <div className="modal-container">
            <button className="button-x" onClick={handleCloseModal}>
              <X />
            </button>
            <div className="modal-card">
              <h1>lets connect fast</h1>
              <p>Put in your contact for us to reach out to you!</p>
              <form className="modal-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter Your Profession"
                  name="profession"
                  value={formData.profession}
                  onChange={handleChange}
                  required
                />
                <button type="submit">Click Here</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
