import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const HomePage = ({ isDarkMode }) => {
  const navigate = useNavigate();

  // Images
  const heroImage = '/assets/Images/hero-section.jpg';
  const aboutImage1 = '/assets/Images/image05.jpg';
  const aboutImage2 = '/assets/Images/image02.jpg';
  const blogImage1 = '/assets/Images/image05.jpg';
  const blogImage2 = '/assets/Images/image02.jpg';
  const blogImage3 = '/assets/Images/image03.jpg';

  const googleMapsEmbedUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.814349479383!2d24.153723715878484!3d45.7709322791054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c6767b45a0b73%3A0x67c2d1b0d2d3c9e6!2sStrada%20C%C4%83l%C8%9Bun%2026%2C%20Sibiu%20550298!5e0!3m2!1sen!2sro!4v1707056000000!5m2!1sen!2sro';

  const servicesData = [
    { title: 'Curățenie Rezidențială', icon: 'fa-solid fa-house-chimney' },
    { title: 'Curățenie Generală', icon: 'fa-solid fa-broom' },
    { title: 'Curățenie după Constructor', icon: 'fa-solid fa-helmet-safety' },
    { title: 'Curățenie Birouri', icon: 'fa-solid fa-building' },
    { title: 'Întreținere Spații Comerciale', icon: 'fa-solid fa-shop' },
    { title: 'Servicii Personalizate', icon: 'fa-solid fa-hand-sparkles' },
  ];

  const benefitsData = [
    { title: 'Echipamente ecologice', icon: 'fa-solid fa-leaf' },
    { title: 'Program flexibil', icon: 'fa-solid fa-clock' },
    { title: 'Personal calificat', icon: 'fa-solid fa-user-check' },
    { title: 'Transparență', icon: 'fa-solid fa-handshake' },
    { title: 'Prețuri corecte', icon: 'fa-solid fa-tag' },
    { title: 'Promptitudine', icon: 'fa-solid fa-bolt' },
  ];

  return (
    <div className={`home-page ${isDarkMode ? 'dark-mode' : ''}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Servicii profesionale de curățenie în Sibiu</h1>
            <p className="hero-subtitle">
              Oferim soluții eficiente și personalizate pentru curățenie rezidențială, birouri și spații comerciale.
            </p>
            <button onClick={() => navigate('/contact')} className="cta-button">
              Cere o ofertă
            </button>
          </div>
          <div className="hero-image">
            <img src={heroImage} alt="Servicii Profesionale de Curățenie" />
            <div className="satisfaction-badge">
              <span>100%</span>
              <p>Clienți Mulțumiți</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
<section className="about-section">
  <div className="section-container">
    <div className="about-images">
      <div className="image-wrapper">
        <img src={aboutImage1} alt="Echipa de curatenie" className="about-main-img" />
        <img src={aboutImage2} alt="Curatenie profesionala" className="about-secondary-img" />
      </div>
    </div>
    <div className="about-content">
      <h2 className="section-title">Despre Noi</h2>
      <h3 className="about-subtitle">Curățenie Morhan: Experiență și Dedicație</h3>
      <p className="about-text">Fondată cu scopul de a oferi soluții complete și personalizate de curățenie, echipa noastră aduce profesionalism și atenție la detalii în fiecare proiect.</p>
      <h3 className="about-subtitle">Viziune și Valori</h3>
      <p className="about-text">Ne dorim să devenim partenerul tău de încredere pentru toate nevoile de curățenie, oferind servicii de calitate superioară la prețuri competitive.</p>
      <div className="about-features">
        <div className="feature-item">
          <div className="feature-icon">✓</div>
          <span>Echipamente profesionale</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon">✓</div>
          <span>Produse eco-friendly</span>
        </div>
        <div className="feature-item">
          <div className="feature-icon">✓</div>
          <span>Personal calificat</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Services */}
<section className="services-section">
  <div className="section-container">
    <div className="section-header">
      <h2 className="section-title">Serviciile Noastre</h2>
      <p className="section-subtitle">Soluții complete de curățenie adaptate nevoilor dumneavoastră</p>
    </div>
    
    <div className="services-grid">
      {servicesData.map((service, index) => (
        <a 
          key={index} 
          href={`/servicii#${service.id}`} 
          className="service-card"
          aria-label={`Detalii despre ${service.title}`}
        >
          <div className="card-inner">
            <div className="service-icon">
              <i className={service.icon}></i>
            </div>
            <h3>{service.title}</h3>
            <p className="service-excerpt">{service.excerpt}</p>
            <span className="service-link">Află mai multe →</span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="section-container">
          <h2 className="section-title">De ce să ne alegi?</h2>
          <div className="benefits-grid">
            {benefitsData.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <h4>{benefit.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="blog-section">
        <div className="section-container">
          <h2 className="section-title">Ultimele Articole</h2>
          <div className="blog-grid">
            {[blogImage1, blogImage2, blogImage3].map((img, idx) => (
              <div key={idx} className="blog-card">
                <img src={img} alt={`Blog ${idx + 1}`} />
                <div className="blog-content">
                  <h4>Articol {idx + 1}</h4>
                  <p className="blog-date">{`Aprilie ${21 - idx * 5}, 2025`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p>Pentru o ofertă personalizată sau orice întrebări, nu ezitați să ne contactați:</p>
              <ul className="contact-list">
                <li><i className="fa-solid fa-phone"></i> +40 745 265 769</li>
                <li><i className="fa-solid fa-envelope"></i> contact@firmacurateniesibiu.ro</li>
                <li><i className="fa-solid fa-location-dot"></i> Strada Călțun 26, Sibiu 550298</li>
              </ul>
              <button onClick={() => navigate('/contact')} className="cta-button">
                Cere Ofertă
              </button>
            </div>
            <div className="contact-map">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="350"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Harta Google Maps cu locația Curățenie Morhan"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="section-container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Curățenie Morhan</h4>
              <p>Partenerul tău de încredere pentru un spațiu impecabil și sănătos.</p>
              <div className="social-icons">
                <a href="facebook"><i className="fab fa-facebook-f"></i></a>
                <a href="instagram"><i className="fab fa-instagram"></i></a>
                <a href="Linkedin"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
            <div className="footer-col">
              <h4>Servicii</h4>
              <ul>
                <li><a href="image01.jpg">Curățenie Generală</a></li>
                <li><a href="image02.jpg">Curățenie Birouri</a></li>
                <li><a href="image03.jpg">Curățenie Apartamente</a></li>
                <li><a href="image04.jpg">Curățenie Spații Verzi</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Blog</h4>
              <ul>
                <li><a href="image02">Sfaturi Utile</a></li>
                <li><a href="image03">Produse Eco</a></li>
                <li><a href="image04">Întreținere Spații</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="#contact-section">Cere Ofertă</a></li>
                <li>
                  <button className="footer-button" onClick={() => alert('Feedback form will open soon!')}>
                    Trimite Feedback
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Curățenie Morhan. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;