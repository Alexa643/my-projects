import { useState } from "react";
import { MdEmail, MdLocationOn, MdPhone, MdClose } from "react-icons/md";
import "./Header.css";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const closeModal = (e) => {
    e.stopPropagation();
    setIsModalOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-content">
            {/* Lista de contacte pentru desktop */}
            <div className="contact-list desktop-only">
              <div className="header-item">
                <MdEmail className="icon" />
                <a
                  href="mailto:curatenie.morhan@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  curatenie.morhan@gmail.com
                </a>
              </div>
              <div className="header-item">
                <MdLocationOn className="icon" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Strada+Călțun,+26,+Sibiu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Strada Călțun, 26, Sibiu
                </a>
              </div>
              <div className="header-item">
                <MdPhone className="icon" />
                <a href="tel:+40745265769">+4 0745 26 57 69</a>
              </div>
            </div>

            {/* Buton contact pentru mobile/tablet */}
            <button
              className="contact-button mobile-only"
              onClick={toggleModal}
            >
              <MdPhone className="button-icon" />
              <span>Contact</span>
            </button>
          </div>
        </div>
      </header>

      {/* Modal simplu pentru mobile/tablet */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              <MdClose size={20} />
            </button>

            <div className="modal-contacts">
              {/* Email */}
              <div className="contact-row">
                <MdEmail className="row-icon" />
                <a
                  href="mailto:curatenie.morhan@gmail.com"
                  className="contact-text"
                >
                  curatenie.morhan@gmail.com
                </a>
              </div>

              {/* Adresa */}
              <div className="contact-row">
                <MdLocationOn className="row-icon" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Strada+Călțun,+26,+Sibiu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-text"
                >
                  Strada Călțun, 26, Sibiu
                </a>
              </div>

              {/* Telefon */}
              <div className="contact-row">
                <MdPhone className="row-icon" />
                <a href="tel:+40745265769" className="contact-text">
                  +4 0745 26 57 69
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
