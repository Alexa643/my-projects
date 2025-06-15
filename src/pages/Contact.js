import React, { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaPaperPlane,
  FaSpinner,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return isMobile;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    numLocations: 1,
    numRooms: 1,
    numBathrooms: 1,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobileFormOpen, setMobileFormOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "number" ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Form data submitted:", formData);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        numLocations: 1,
        numRooms: 1,
        numBathrooms: 1,
        message: "",
      });

      if (isMobile) {
        setTimeout(() => setMobileFormOpen(false), 3000);
      }

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="contact">
      <div className="contact-wrapper">
        <div className="contact-info-section">
          <h2 className="contact-heading">Intră în Contact cu Noi</h2>
          <p className="contact-subheading">
            Ai întrebări, ai nevoie de o estimare sau vrei să programezi o
            curățenie? Suntem aici să te ajutăm! Ne poți contacta prin metodele
            de mai jos sau prin formularul nostru rapid.
          </p>

          <div className="contact-methods">
            <div className="contact-method-item">
              <div className="address-icon-wrapper">
                <FaMapMarkerAlt size={20} className="address-icon" />
              </div>
              <div>
                <h4>Adresă</h4>
                <p>Strada Călțun, Nr. 26, Sibiu</p>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="phone-icon-wrapper">
                <FaPhoneAlt size={20} className="phone-icon" />
              </div>
              <div>
                <h4>Telefonic</h4>
                <a href="tel:+40745265769" className="contact-link phone-link">
                  +4 0745 26 57 69
                </a>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="email-icon-wrapper">
                <FaEnvelope size={20} className="email-icon" />
              </div>
              <div>
                <h4>Email</h4>
                <a
                  href="mailto:contact@firmacurateniesibiu.ro"
                  className="contact-link email-link"
                >
                  contact@firmacurateniesibiu.ro
                </a>
                <a
                  href="mailto:curatenie.morhan@gmail.com"
                  className="contact-link email-link"
                >
                  curatenie.morhan@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="facebook-icon-wrapper">
                <FaFacebookF size={20} className="facebook-icon" />
              </div>
              <div>
                <h4>Facebook</h4>
                <a
                  href="https://www.facebook.com/profile.php?id=100054465400974"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link facebook-link"
                >
                  Vizitează-ne pe Facebook
                </a>
              </div>
            </div>

            <div className="contact-method-item">
              <div className="whatsapp-icon-wrapper">
                <FaWhatsapp size={20} className="whatsapp-icon" />
              </div>
              <div>
                <h4>WhatsApp</h4>
                <a
                  href="https://wa.me/40745265769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link whatsapp-link"
                >
                  Trimite-ne un mesaj
                </a>
              </div>
            </div>
          </div>

          {isMobile && (
            <button
              className="mobile-form-button"
              onClick={() => setMobileFormOpen(true)}
            >
              Trimite un mesaj / Cere Ofertă
            </button>
          )}
        </div>

        {!isMobile && (
          <div className="contact-form-section">
            <h2>Scrie-ne: Trimite Mesaj / Cerere Ofertă</h2>
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
              submitted={submitted}
            />
          </div>
        )}

        <AnimatePresence>
          {isMobileFormOpen && (
            <motion.div
              className="mobile-form-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="mobile-form-content"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                transition={{ duration: 0.4 }}
              >
                <button
                  className="close-button"
                  onClick={() => setMobileFormOpen(false)}
                >
                  ×
                </button>
                <h2>Scrie-ne: Trimite Mesaj / Cerere Ofertă</h2>
                <ContactForm
                  formData={formData}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                  loading={loading}
                  submitted={submitted}
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ContactForm = ({
  formData,
  handleChange,
  handleSubmit,
  loading,
  submitted,
}) => {
  const renderNumberOptions = (max) => {
    const options = [];
    for (let i = 1; i <= max; i++) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  if (submitted) {
    return (
      <motion.div
        className="success-message"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          width="48"
          height="48"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span>
          Mesajul tău a fost trimis cu succes! Te vom contacta în scurt timp.
        </span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-field">
        <label htmlFor="name">Numele tău</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Introdu numele tău complet"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Adresa ta de email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="phone">Telefon</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          placeholder="Numărul tău de telefon"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-field">
        <label htmlFor="address">Adresă / Locație (opțional)</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Ex: Str. Principală, Nr. 12, Sibiu"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-row">
        <div className="form-field">
          <label htmlFor="numLocations">Număr locații</label>
          <select
            id="numLocations"
            name="numLocations"
            value={formData.numLocations}
            onChange={handleChange}
          >
            {renderNumberOptions(6)}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="numRooms">Număr Camere</label>
          <select
            id="numRooms"
            name="numRooms"
            value={formData.numRooms}
            onChange={handleChange}
          >
            {renderNumberOptions(10)}
          </select>
        </div>
        <div className="form-field">
          <label htmlFor="numBathrooms">Număr Băi</label>
          <select
            id="numBathrooms"
            name="numBathrooms"
            value={formData.numBathrooms}
            onChange={handleChange}
          >
            {renderNumberOptions(5)}
          </select>
        </div>
      </div>

      <div className="form-field">
        <label htmlFor="message">Mesaj / Detalii Cerere Ofertă</label>
        <textarea
          id="message"
          name="message"
          placeholder="Descrie pe scurt serviciile de curățenie de care ai nevoie..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? <FaSpinner className="spinner-icon" /> : <FaPaperPlane />}
        {loading ? " Se trimite..." : " Trimite Cerere Ofertă"}
      </button>
    </form>
  );
};

export default Contact;
