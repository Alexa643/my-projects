import React, { useState, useEffect } from 'react';
import { FaFacebook, FaWhatsapp, FaPaperPlane, FaSpinner, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Contact.css'; // Asigură-te că ai acest fișier CSS

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
  // Am extins starea formData pentru a include noile câmpuri
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '', // Adăugat câmpul telefon
    address: '', // Adăugat câmpul adresă
    numLocations: 1, // Adăugat câmpul număr locații (default 1)
    numRooms: 1,     // Adăugat câmpul număr camere (default 1)
    numBathrooms: 1, // Adăugat câmpul număr băi (default 1)
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isMobileFormOpen, setMobileFormOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    // Conversie la număr pentru câmpurile numerice
    setFormData({
      ...formData,
      [name]: type === 'number' ? parseInt(value, 10) : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Aici ar trebui să trimiți datele la un backend (ex: API, email service)
    console.log('Form data submitted:', formData);

    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      // Resetează doar câmpurile din formular, păstrând default-urile numerice
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        numLocations: 1,
        numRooms: 1,
        numBathrooms: 1,
        message: '',
      });

      if (isMobile) {
        setTimeout(() => setMobileFormOpen(false), 3000);
      }

      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Intră în Contact cu Noi</h2>
          <p className="contact-description">
            Ai întrebări, ai nevoie de o estimare sau vrei să programezi o curățenie? Suntem aici să te ajutăm! Ne poți contacta prin metodele de mai jos sau prin formularul nostru rapid.
          </p>

          <div className="contact-details-group">
            <div className="contact-method">
              <FaMapMarkerAlt size={24} className="contact-icon" />
              <div>
                <h4>Adresă</h4>
                <p>Strada Călțun, Nr. 26, Sibiu</p>
              </div>
            </div>

            <div className="contact-method">
              <FaPhoneAlt size={24} className="contact-icon" />
              <div>
                <h4>Telefonic</h4>
                <a href="tel:+40745265769" className="contact-link">+4 0745 26 57 69</a>
              </div>
            </div>

            <div className="contact-method">
              <FaEnvelope size={24} className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:contact@firmacurateniesibiu.ro" className="contact-link">contact@firmacurateniesibiu.ro</a>
                <a href="mailto:curatenie.morhan@gmail.com" className="contact-link">curatenie.morhan@gmail.com</a>
              </div>
            </div>

            {/* Secțiunea de social media - poți alege dacă vrei să o păstrezi separat sau integrată */}
            <div className="contact-method">
              <FaFacebook size={24} className="contact-icon" />
              <div>
                <h4>Facebook</h4>
                <a
                  href="https://www.facebook.com/profile.php?id=100054465400974"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
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
                  href="https://wa.me/40745265769" // Asigură-te că numărul este corect
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  Trimite-ne un mesaj
                </a>
              </div>
            </div>
          </div>

          {isMobile && (
            <button className="open-form-btn" onClick={() => setMobileFormOpen(true)}>
              Trimite un mesaj / Cere Ofertă
            </button>
          )}

        </div>

        {!isMobile && (
          <div className="contact-form-container">
            <h2>Scrie-ne: Trimite Mesaj / Cerere Ofertă</h2>
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
                <h2>Scrie-ne: Trimite Mesaj / Cerere Ofertă</h2>
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
  // Funcție ajutătoare pentru a crea opțiunile pentru select-uri
  const renderNumberOptions = (max) => {
    const options = [];
    for (let i = 1; i <= max; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
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
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="48" height="48"> {/* Iconiță mai mare */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>Mesajul tău a fost trimis cu succes! Te vom contacta în scurt timp.</span> {/* Mesaj mai complet */}
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
          placeholder="Introdu numele tău complet"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
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
      <div className="form-group">
        <label htmlFor="phone">Telefon</label>
        <input
          type="tel" // Tipul tel pentru telefoane
          id="phone"
          name="phone"
          placeholder="Numărul tău de telefon"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
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

      <div className="form-row"> {/* Folosim un div pentru a grupa select-urile */}
        <div className="form-group">
          <label htmlFor="numLocations">Număr locații</label>
          <select
            id="numLocations"
            name="numLocations"
            value={formData.numLocations}
            onChange={handleChange}
          >
            {renderNumberOptions(6)} {/* Poți ajusta numărul maxim */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numRooms">Număr Camere</label>
          <select
            id="numRooms"
            name="numRooms"
            value={formData.numRooms}
            onChange={handleChange}
          >
            {renderNumberOptions(10)} {/* Poți ajusta numărul maxim */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numBathrooms">Număr Băi</label>
          <select
            id="numBathrooms"
            name="numBathrooms"
            value={formData.numBathrooms}
            onChange={handleChange}
          >
            {renderNumberOptions(5)} {/* Poți ajusta numărul maxim */}
          </select>
        </div>
      </div>

      <div className="form-group">
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
      <button type="submit" className="submit-btn" disabled={loading}>
        {loading ? <FaSpinner className="spinner" /> : <FaPaperPlane />}
        {loading ? ' Se trimite...' : ' Trimite Cerere Ofertă'}
      </button>
    </form>
  );
};

export default Contact;