import React, { useState, useEffect } from 'react';
import { FaFacebook, FaWhatsapp, FaPaperPlane, FaSpinner } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobileFormOpen, setMobileFormOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });

      // Închide modalul după 3 secunde pe mobil
      if (isMobile) {
        setTimeout(() => setMobileFormOpen(false), 3000);
      }

      // Resetează mesajul după 5 secunde
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Contactează-ne</h2>
          <p className="contact-text">
            Ai întrebări sau ai nevoie de ajutor? Ne poți scrie direct prin formular sau social media.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <FaFacebook size={24} className="contact-icon" />
              <div>
                <h4>Facebook</h4>
                <a
                  href="https://www.facebook.com/profile.php?id=100054465400974"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Vizitează-ne pe Facebook
                </a>
              </div>
            </div>

            <div className="contact-method">
              <FaWhatsapp size={24} className="contact-icon whatsapp" />
              <div>
                <h4>WhatsApp</h4>
                <a
                  href="https://wa.me/40745265769"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Trimite-ne un mesaj
                </a>
              </div>
            </div>
          </div>

          {isMobile && (
            <button className="open-form-btn" onClick={() => setMobileFormOpen(true)}>
              Trimite un mesaj
            </button>
          )}

          <div className="contact-social">
            <a
              href="https://www.facebook.com/profile.php?id=100054465400974"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={28} className="social-icon" />
            </a>
            <a href="https://wa.me/40712345678" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={28} className="social-icon whatsapp" />
            </a>
          </div>
        </div>

        {!isMobile && (
          <div className="contact-form-container">
            <h2>Trimite un mesaj</h2>
            <FormContent
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
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="modal-content"
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                exit={{ y: 100 }}
                transition={{ duration: 0.4 }}
              >
                <button className="close-btn" onClick={() => setMobileFormOpen(false)}>
                  ×
                </button>
                <h2>Trimite un mesaj</h2>
                <FormContent
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

const FormContent = ({ formData, handleChange, handleSubmit, loading, submitted }) => {
  if (submitted) {
    return (
      <motion.div
        className="success-message"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Mesajul tău a fost trimis cu succes!</span>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Numele tău</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Introdu numele"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email-ul</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Adresa de email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Mesajul</label>
        <textarea
          id="message"
          name="message"
          placeholder="Scrie mesajul..."
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? <FaSpinner className="spinner" /> : <FaPaperPlane />}
        {loading ? ' Se trimite...' : ' Trimite mesaj'}
      </button>
    </form>
  );
};

export default Contact;
