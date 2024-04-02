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
      await axios.post("http://localhost:5000/addDetails", formData);
      // Clear form fields after successful submission
      setFormData({
        email: "",
        name: "",
        profession: ""
      });
      setSubmitted(true); // Update state to show the "Thank you" message
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
              {submitted ? ( // Display the "Thank you" message if form is submitted
                <div className="thank-you-message">
                  <h2>Thank you for your submission!</h2>
                  <p>We'll reach out to you shortly.</p>
                </div>
              ) : (
                <>
                  <h1>Let's connect fast</h1>
                  <p>Put in your contact for us to reach out to you!</p>
                  <form className="modal-form" onSubmit={handleSubmit}>
                    {/* Form fields go here */}
                    <div className="modalemail">
                      <label>Email</label>
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="modalname">
                      <label>Name</label>
                      <input
                        type="text"
                        placeholder="Enter Your Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="modalprof">
                      <label>Profession</label>
                      <select
                        name="profession"
                        value={formData.profession}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select Your Profession</option>
                        <option value="founder">Founder</option>
                        <option value="investor">Investor</option>
                        <option value="analyst">Analyst</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <button type="submit">Click Here</button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
