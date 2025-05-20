import React, { useState } from 'react';
import { FaFacebook, FaWhatsapp, FaPaperPlane, FaSpinner } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset submission status after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="contact-title">Contactează-ne</h2>
          <p className="contact-text">
            Ai întrebări sau ai nevoie de ajutor? Nu ezita să ne contactezi prin 
            formularul de pe această pagină sau prin canalele noastre de social media.
          </p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <span className="contact-icon">
                <FaFacebook size={24} />
              </span>
              <div className="contact-details">
                <h4>Facebook</h4>
                <a 
                  href="https://www.facebook.com/profile.php?id=100054465400974#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Vizitează-ne pe Facebook
                </a>
              </div>
            </div>

            <div className="contact-method">
              <span className="contact-icon">
                <FaWhatsapp size={24} />
              </span>
              <div className="contact-details">
                <h4>WhatsApp</h4>
                <a 
                  href="https://wa.me/0745265769" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  Trimite-ne un mesaj
                </a>
              </div>
            </div>
          </div>

          <div className="contact-social">
            <a 
              href="https://www.facebook.com/yourpage" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={28} className="social-icon" />
            </a>
            <a 
              href="https://wa.me/40712345678" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={28} className="social-icon" />
            </a>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Trimite un mesaj</h2>

          {submitted ? (
            <div className="success-message">
              <FaPaperPlane /> Mesajul a fost trimis cu succes! Vă vom răspunde în cel mai scurt timp.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Numele tău</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Introdu numele tău"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email-ul tău</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Introdu adresa de email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajul tău</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Scrie mesajul tău aici..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <>
                    <FaSpinner className="spinner" /> Se trimite...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Trimite mesaj
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;