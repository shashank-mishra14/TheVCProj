import React, { useState } from "react";
import "./Modal.css";
import { X } from "lucide-react";

function Modal() {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
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
              <form className="modal-form">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                />
                <button>Click Here</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
