import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const HomePage = ({ isDarkMode }) => {
  const navigate = useNavigate();

  // Imagini principale
  const heroImageMorhan = '/assets/Images/hero-section.jpg';
  const blogImage1Morhan = '/assets/Images/image01.jpg';
  const blogImage2Morhan = '/assets/Images/image02.jpg';
  const blogImage3Morhan = '/assets/Images/image03.jpg';

  const aboutUsImg1 = '/assets/Images/image01.jpg';
  const aboutUsImg2 = '/assets/Images/image02.jpg';
  const aboutUsImg3 = '/assets/Images/image03.jpg';

  const googleMapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.814349479383!2d24.153723715878484!3d45.7709322791054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c6767b45a0b73%3A0x67c2d1b0d2d3c9e6!2sStrada%20C%C4%83l%C8%9Bun%2026%2C%20Sibiu%20550298!5e0!3m2!1sen!2sro!4v1707056000000!5m2!1sen!2sro';

  const servicesData = [
    { title: 'Curățenie Rezidențială', icon: 'fa-solid fa-house-chimney' },
    { title: 'Curățenie Generală', icon: 'fa-solid fa-broom' },
    { title: 'Curățenie după Constructor', icon: 'fa-solid fa-helmet-safety' },
    { title: 'Curățenie Birouri', icon: 'fa-solid fa-building' },
    { title: 'Întreținere Spații Comerciale', icon: 'fa-solid fa-shop' },
    { title: 'Servicii Personalizate', icon: 'fa-solid fa-hand-sparkles' },
  ];

  const benefitsData = [
    'Echipamente și soluții ecologice',
    'Program flexibil',
    'Personal calificat și verificat',
    'Transparență și seriozitate',
    'Prețuri corecte',
    'Promptitudine',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-morhan">
        <div className="hero-morhan-overlay"></div>
        <div className="hero-morhan-content">
          <div className="hero-text-content">
            <h1 className="hero-morhan-title">
              Servicii profesionale<br />de curățenie în Sibiu
            </h1>
            <p className="hero-morhan-subtitle">
              Oferim soluții eficiente și personalizate pentru curățenie rezidențială, birouri și spații comerciale.
            </p>
            <button onClick={() => navigate('/contact')} className="hero-morhan-button">
              Cere o ofertă
            </button>
            <div className="satisfaction-badge-morhan">
              <span>100%</span>
              <p>Clienți<br />Mulțumiți</p>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img src={heroImageMorhan} alt="Servicii Profesionale de Curățenie" className="hero-morhan-image" />
          </div>
        </div>
      </section>

      {/* Despre Noi */}
      <section className="about-us-section home-container">
        <div className="about-us-images">
          <img src={aboutUsImg1} alt="Echipa de curatenie" className="about-us-img large-img" />
          <img src={aboutUsImg2} alt="Curatenie profesionala" className="about-us-img small-img top-right" />
          <img src={aboutUsImg3} alt="Servicii de calitate" className="about-us-img small-img bottom-left" />
        </div>
        <div className="about-us-content">
          <h2 className="section-title-morhan">Despre Noi</h2>
          <h4>Curățenie Morhan: Experiență și Dedicație în Servicii Profesionale de Curățenie</h4>
          <p>Fondată cu scopul de a oferi soluții complete și personalizate de curățenie...</p>
          <h4>Viziune și Valori</h4>
          <p>Viziunea noastră este să devenim partenerul tău de încredere pentru toate nevoile de curățenie...</p>
        </div>
      </section>

      {/* Servicii */}
      <section className="services-section-morhan home-container">
        <h2 className="section-title-morhan">Serviciile Noastre</h2>
        <div className="service-grid-morhan">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card-morhan">
              <i className={`icon ${service.icon}`}></i>
              <h4>{service.title}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Beneficii */}
      <section className="home-container py-16 mb-16">
        <h2 className="section-title-morhan">De ce să ne alegi?</h2>
        <ul className="benefit-list">
          {benefitsData.map((benefit, idx) => (
            <li key={idx} className="benefit-item">
              <i className="fa-solid fa-check-circle"></i> {benefit}
            </li>
          ))}
        </ul>
      </section>

      {/* Blog */}
      <section className="blog-section-morhan">
        <h2 className="section-title-morhan">Ultimele Articole</h2>
        <div className="blog-grid-morhan home-container">
          {[blogImage1Morhan, blogImage2Morhan, blogImage3Morhan].map((img, idx) => (
            <div key={idx} className="blog-card-morhan">
              <img src={img} alt={`Blog ${idx + 1}`} className="blog-card-img-morhan" />
              <div className="blog-card-content-morhan">
                <h4>Articol {idx + 1}</h4>
                <p className="blog-date-morhan">{`Aprilie ${21 - idx * 5}, 2025`}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section-morhan">
        <h2 className="section-title-morhan">Contact</h2>
        <div className="contact-content-morhan home-container">
          <div className="contact-details-morhan">
            <p>Pentru o ofertă personalizată sau orice întrebări...</p>
            <ul className="contact-list-morhan">
              <li><i className="fa-solid fa-phone"></i> +40 745 265 769</li>
              <li><i className="fa-solid fa-envelope"></i> contact@firmacurateniesibiu.ro</li>
              <li><i className="fa-solid fa-location-dot"></i> Strada Călțun 26, Sibiu 550298</li>
            </ul>
          </div>
          <div className="contact-map-form">
            <iframe
              src={googleMapsEmbedUrl}
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harta Google Maps cu locația Curățenie Morhan"
              className="contact-map-image"
            ></iframe>
          </div>
        </div>
        <div className="contact-offer-button-wrapper">
          <button onClick={() => navigate('/contact')} className="contact-offer-button">
            Cere Ofertă
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-morhan">
        <div className="footer-content-morhan home-container">
          <div className="footer-col-morhan">
            <h4>Curățenie Morhan</h4>
            <p>Partenerul tău de încredere pentru un spațiu impecabil și sănătos...</p>
            <div className="footer-social-morhan">
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
          </div>
          <div className="footer-col-morhan">
            <h4>Servicii</h4>
            <ul>
              <li><a href="image01">Curățenie Generală</a></li>
              <li><a href="image02">Curățenie Birouri</a></li>
              <li><a href="image03">Curățenie Apartamente</a></li>
              <li><a href="image04">Curățenie Spații Verzi</a></li>
            </ul>
          </div>
          <div className="footer-col-morhan">
            <h4>Blog</h4>
            <ul>
              <li><a href="image02">Sfaturi Utile</a></li>
              <li><a href="image03">Produse Eco</a></li>
              <li><a href="image04">Întreținere Spații</a></li>
            </ul>
          </div>
          <div className="footer-col-morhan">
            <h4>Contact</h4>
            <ul>
              <li><a href="#contact-section-morhan">Cere Ofertă</a></li>
              <li>
                <button
                  type="button"
                  className="footer-link-button"
                  onClick={() => alert('Funcționalitatea de feedback va fi disponibilă în curând!')}
                >
                  Trimite Feedback
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom-morhan">
          <p>© {new Date().getFullYear()} Curățenie Morhan. Toate drepturile rezervate.</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;