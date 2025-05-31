import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const HomePage = ({ isDarkMode }) => {
  const navigate = useNavigate();

  // Images
  const heroImage = "/assets/Images/hero-cleaning.jpg"; 
  const aboutImage1 = "/assets/Images/image05.jpg";
  const aboutImage2 = "/assets/Images/image02.jpg";
  const blogImage1 = "/assets/Images/image05.jpg";
  const blogImage2 = "/assets/Images/image02.jpg";
  const blogImage3 = "/assets/Images/image03.jpg";

  // It's highly recommended to use a valid Google Maps embed URL
  // The current URL "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.814349479383!2d24.153723715878484!3d45.7709322791054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c6767b45a0b73%3A0x67c2d1b0d2d3c9e6!2sStrada%20C%C4%83l%C8%9Bun%2026%2C%20Sibiu%20550298!5e0!3m2!1sen!2sro!4v1707056000000!5m2!1sen!2sro" is not a functional embed URL.
  // You should get a valid embed code from Google Maps for your specific location.
  const googleMapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.814349479383!2d24.153723715878484!3d45.7709322791054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c6767b45a0b73%3A0x67c2d1b0d2d3c9e6!2sStrada%20C%C4%83l%C8%9Bun%2026%2C%20Sibiu%20550298!5e0!3m2!1sen!2sro!4v1707056000000!5m2!1sen!2sro (YOUR ACTUAL GOOGLE MAPS EMBED CODE HERE)";

  const servicesData = [
    {
      title: "Curățenie Rezidențială",
      icon: "fa-solid fa-house-chimney",
      description: "Servicii complete pentru locuințe private",
      excerpt: "Oferim soluții personalizate pentru curățenia casei tale, adaptate stilului tău de viață.",
      id: "curatenie-rezidentiala", // Added ID for anchor linking
    },
    {
      title: "Curățenie Generală",
      icon: "fa-solid fa-broom",
      description: "Curățenie profundă pentru orice spațiu",
      excerpt: "Curățenie completă și detaliată pentru toate tipurile de spații și suprafețe.",
      id: "curatenie-generala",
    },
    {
      title: "Curățenie după Constructor",
      icon: "fa-solid fa-helmet-safety",
      description: "Eliminăm urmele după renovări",
      excerpt: "Specialiști în curățenia post-renovare și eliminarea prafului de construcție.",
      id: "curatenie-dupa-constructor",
    },
    {
      title: "Curățenie Birouri",
      icon: "fa-solid fa-building",
      description: "Soluții pentru spații de lucru",
      excerpt: "Menținem un mediu de lucru curat și profesional pentru echipa ta.",
      id: "curatenie-birouri",
    },
    {
      title: "Întreținere Spații Comerciale",
      icon: "fa-solid fa-shop",
      description: "Servicii regulate pentru afaceri",
      excerpt: "Programe de întreținere adaptate nevoilor specifice ale afacerii tale.",
      id: "intretinere-spatii-comerciale",
    },
    {
      title: "Servicii Personalizate",
      icon: "fa-solid fa-hand-sparkles",
      description: "Adaptate nevoilor dumneavoastră",
      excerpt: "Creăm pachete de servicii personalizate pentru cerințele tale specifice.",
      id: "servicii-personalizate",
    },
  ];

  const benefitsData = [
    { title: "Echipamente ecologice", icon: "fa-solid fa-leaf" },
    { title: "Program flexibil", icon: "fa-solid fa-clock" },
    { title: "Personal calificat", icon: "fa-solid fa-user-check" },
    { title: "Transparență", icon: "fa-solid fa-handshake" },
    { title: "Prețuri corecte", icon: "fa-solid fa-tag" },
    { title: "Promptitudine", icon: "fa-solid fa-bolt" },
  ];

  const blogArticles = [
    {
      title: "Sfaturi pentru curățenia de primăvară",
      date: "Aprilie 21, 2025",
      image: blogImage1,
      excerpt: "Descoperă cele mai eficiente metode pentru curățenia de primăvară.",
      link: "/blog/sfaturi-curatenie-primavara", // Example link
    },
    {
      title: "Produse eco pentru curățenie",
      date: "Aprilie 16, 2025",
      image: blogImage2,
      excerpt: "Ghidul complet pentru produse de curățenie ecologice și sigure.",
      link: "/blog/produse-eco-curatenie",
    },
    {
      title: "Cum să menții casa curată cu animale de companie",
      date: "Aprilie 11, 2025",
      image: blogImage3,
      excerpt: "Trucuri și sfaturi pentru o casă impecabilă chiar și cu animale de companie.",
      link: "/blog/curatenie-cu-animale-de-companie",
    },
  ];

  return (
    <div className={`home-page ${isDarkMode ? "dark-mode" : ""}`}>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Servicii profesionale de curățenie în Sibiu</h1>
            <p className="hero-subtitle">
              Oferim soluții eficiente și personalizate pentru curățenie rezidențială, birouri și spații comerciale.
            </p>
            <button onClick={() => navigate("/contact")} className="cta-button">
              <span>Cere o ofertă</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="hero-image-container">
            <div className="hero-image">
              <img src={heroImage || "/placeholder.svg"} alt="Servicii Profesionale de Curățenie" />
              <div className="satisfaction-badge">
                <span className="badge-number">100%</span>
                <p className="badge-text">Clienți Mulțumiți</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <div className="section-container">
          <div className="about-content-wrapper">
            <div className="about-images">
              <div className="image-grid">
                <div className="main-image">
                  <img src={aboutImage1 || "/placeholder.svg"} alt="Echipa de curatenie" className="about-main-img" />
                </div>
                <div className="secondary-image">
                  <img
                    src={aboutImage2 || "/placeholder.svg"}
                    alt="Curatenie profesionala"
                    className="about-secondary-img"
                  />
                </div>
              </div>
            </div>
            <div className="about-content">
              <div className="section-header">
                <h2 className="section-title">Despre Noi</h2>
                <div className="title-underline"></div>
              </div>
              <h3 className="about-subtitle">Curățenie Morhan: Experiență și Dedicație</h3>
              <p className="about-text">
                Fondată cu scopul de a oferi soluții complete și personalizate de curățenie, echipa noastră aduce
                profesionalism și atenție la detalii în fiecare proiect.
              </p>
              <h3 className="about-subtitle">Viziune și Valori</h3>
              <p className="about-text">
                Ne dorim să devenim partenerul tău de încredere pentru toate nevoile de curățenie, oferind servicii de
                calitate superioară la prețuri competitive.
              </p>
              <div className="about-features">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>Echipamente profesionale</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>Produse eco-friendly</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fa-solid fa-check"></i>
                  </div>
                  <span>Personal calificat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Serviciile Noastre</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">Soluții complete de curățenie adaptate nevoilor dumneavoastră</p>
          </div>

          <div className="services-grid">
            {servicesData.map((service, index) => (
              <a
                key={index}
                href={`/servicii#${service.id}`} // Use service.id for accurate anchor linking
                className="service-card"
                aria-label={`Detalii despre ${service.title}`}
              >
                <div className="card-inner">
                  <div className="service-icon">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-excerpt">{service.excerpt}</p>
                  <span className="service-link">Află mai multe <i className="fa-solid fa-arrow-right"></i></span>
                </div>
                <div className="card-overlay"></div> {/* Keep the overlay if you have styling for it */}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">De ce să ne alegi?</h2>
            <div className="title-underline"></div>
          </div>
          <div className="benefits-grid">
            {benefitsData.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <div className="benefit-icon">
                  <i className={benefit.icon}></i>
                </div>
                <h4 className="benefit-title">{benefit.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Ultimele Articole</h2>
            <div className="title-underline"></div>
          </div>
          <div className="blog-grid">
            {blogArticles.map((article, idx) => (
              <article key={idx} className="blog-card">
                <div className="blog-image">
                  <img src={article.image || "/placeholder.svg"} alt={article.title} />
                  <div className="blog-overlay">
                    <i className="fa-solid fa-eye"></i>
                  </div>
                </div>
                <div className="blog-content">
                  <h4 className="blog-title">{article.title}</h4>
                  <p className="blog-excerpt">{article.excerpt}</p>
                  <div className="blog-meta">
                    <span className="blog-date">
                      <i className="fa-solid fa-calendar"></i>
                      {article.date}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Contact</h2>
            <div className="title-underline"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-intro">
                Pentru o ofertă personalizată sau orice întrebări, nu ezitați să ne contactați:
              </p>
              <ul className="contact-list">
                <li className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Telefon</span>
                    <a href="tel:+40745265769" className="contact-value">
                      +40 745 265 769
                    </a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Email</span>
                    <a href="mailto:contact@firmacurateniesibiu.ro" className="contact-value">
                      contact@firmacurateniesibiu.ro
                    </a>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="contact-icon">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div className="contact-details">
                    <span className="contact-label">Adresă</span>
                    <span className="contact-value">Strada Călțun 26, Sibiu 550298</span>
                  </div>
                </li>
              </ul>
              <button onClick={() => navigate("/contact")} className="cta-button contact-cta">
                <span>Cere Ofertă</span>
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
            <div className="contact-map">
              <iframe
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
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
              <h4 className="footer-title">Curățenie Morhan</h4>
              <p className="footer-description">Partenerul tău de încredere pentru un spațiu impecabil și sănătos.</p>
              <div className="social-icons">
                <a
                  href="https://facebook.com/"
                  className="social-link"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://instagram.com/"
                  className="social-link"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://linkedin.com/"
                  className="social-link"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">Servicii</h4>
              <ul className="footer-links">
                <li>
                  <a href="/servicii/curatenie-generala">Curățenie Generală</a>
                </li>
                <li>
                  <a href="/servicii/curatenie-birouri">Curățenie Birouri</a>
                </li>
                <li>
                  <a href="/servicii/curatenie-apartamente">Curățenie Apartamente</a>
                </li>
                <li>
                  <a href="/servicii/curatenie-spatii-verzi">Curățenie Spații Verzi</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">Blog</h4>
              <ul className="footer-links">
                <li>
                  <a href="/blog/sfaturi-utile">Sfaturi Utile</a>
                </li>
                <li>
                  <a href="/blog/produse-eco">Produse Eco</a>
                </li>
                <li>
                  <a href="/blog/intretinere-spatii">Întreținere Spații</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-links">
                <li>
                  <a href="/contact">Cere Ofertă</a>
                </li>
                <li>
                  <button className="footer-button" onClick={() => alert("Feedback form will open soon!")}>
                    Trimite Feedback
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {new Date().getFullYear()} Curățenie Morhan. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;