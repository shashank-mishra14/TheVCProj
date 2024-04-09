import React, { useState, useEffect } from "react";
import "./Modal.css";
import axios from "axios";
import { X } from "lucide-react";

function Modal() {
  const [showModal, setShowModal] = useState(false); // Initially set to false
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    profession: ""
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Delay showing the modal by 15 seconds
    const delay = setTimeout(() => {
      setShowModal(true);
    },15000);

    return () => clearTimeout(delay); // Clear timeout on component unmount
  }, []); // Empty dependency array ensures the effect runs only once on mount

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
                  <h2>Thank you for sharing!</h2>
                  <p>We'll figure out how to add value!</p>
                </div>
              ) : (
                <>
                  <h1>Be a part of the community!🚀</h1>
                  <p className="modal-para">"Hard to beat a person who keeps compounding"</p>
                  <form className="modal-form" onSubmit={handleSubmit}>
                    {/* Form fields go here */}
                    <div className="modal-div">
                      <div className="modaldiv-1">

                        <div className="modalemail">
                          <label className="modal-email">Email</label>
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
                          <p className="modal-p">Don't worry we do not spam😊</p>
                        </div>
                      
                      </div>
                      <div >
                        <img className="image-modal" src="https://vc-thumbnails.blr1.cdn.digitaloceanspaces.com/carousel/sam%20altam.png" alt="" />
                      </div>
                    </div>
                    <button type="submit">Submit</button>
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
