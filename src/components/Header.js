import React, { useState } from "react";
import { FiMail, FiMapPin, FiPhone, FiX } from "react-icons/fi";
import "./Header.css";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          {/* Desktop contact list */}
          <div className="contact-list desktop-only">
            <div className="header-item">
              <FiMail className="icon" />
              <a
                href="mailto:curatenie.morhan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                curatenie.morhan@gmail.com
              </a>
            </div>
            <div className="header-item">
              <FiMapPin className="icon" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Strada+Călțun,+26,+Sibiu"
                target="_blank"
                rel="noopener noreferrer"
              >
                Strada Călțun, 26, Sibiu
              </a>
            </div>
            <div className="header-item">
              <FiPhone className="icon" />
              <a href="tel:+40745265769">+4 0745 26 57 69</a>
            </div>
          </div>

          {/* Mobile/tablet contact button */}
          <button className="contact-button mobile-only" onClick={toggleModal}>
            Contact
          </button>
        </div>
      </div>

      {/* Modal for mobile/tablet contact */}
      {isModalOpen && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal-contact">
            <button className="close-button" onClick={closeModal}>
              <FiX size={24} />
            </button>
            <div className="header-item">
              <FiMail className="icon" />
              <a
                href="mailto:curatenie.morhan@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
              >
                curatenie.morhan@gmail.com
              </a>
            </div>
            <div className="header-item">
              <FiMapPin className="icon" />
              <a
                href="https://www.google.com/maps/search/?api=1&query=Strada+Călțun,+26,+Sibiu"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
              >
                Strada Călțun, 26, Sibiu
              </a>
            </div>
            <div className="header-item">
              <FiPhone className="icon" />
              <a href="tel:+40745265769" onClick={closeModal}>
                +4 0745 26 57 69
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
