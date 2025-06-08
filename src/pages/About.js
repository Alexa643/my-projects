import { Helmet } from "react-helmet";
import React from "react";
import {
  FaLeaf,
  FaClock,
  FaAward,
  FaStar,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./About.css";

const About = () => {
  const galleryImages = [
    "assets/Images/galerie-1.jpg",
    "assets/Images/galerie-2.jpg",
    "assets/Images/galerie-3.jpg",
    "assets/Images/galerie-4.jpg",
    "assets/Images/galerie-5.jpg",
    "assets/Images/galerie-6.jpg",
  ];

  return (
    <>
      <Helmet>
        <title>Despre Noi | Firma Curățenie Sibiu</title>
        <meta
          name="description"
          content="Află mai multe despre echipa noastră și valorile care ne ghidează în fiecare proiect de curățenie."
        />
      </Helmet>

      <div className="page-content">
        {/* About Header */}
        <section className="about-header">
          <div className="container">
            <h1>Despre Curățenie Morhan</h1>
            <p className="subtitle">
              Profesionalism și excelență în curățenie din 2010
            </p>
            <div className="header-divider"></div>
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-images">
                <div className="about-image-wrapper">
                  <img
                    src="assets/Images/echipa-noastra.jpg"
                    alt="Echipa noastră de curățenie"
                    className="about-img"
                    loading="lazy"
                  />
                </div>
                <div className="about-image-wrapper">
                  <img
                    src="assets/Images/echipamentul-nostru.jpg"
                    alt="Echipamentul nostru profesional"
                    className="about-img"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="about-content">
                <p className="about-text">
                  Suntem o echipă dinamică și dedicată, cu o pasiune pentru
                  crearea de spații impecabile. În Sibiu, transformăm locațiile
                  comerciale și rezidențiale în medii curate și sănătoase.
                </p>
                <p className="about-text">
                  Folosim tehnologii moderne și produse eco-friendly pentru a
                  oferi rezultate durabile, întotdeauna adaptate nevoilor
                  specifice ale fiecărui client.
                </p>

                <div className="stats-container">
                  <div className="stat-card">
                    <div className="stat-icon">
                      <FaAward />
                    </div>
                    <div className="stat-info">
                      <h3>10+ Ani</h3>
                      <p>Experiență în domeniu</p>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon">
                      <FaLeaf />
                    </div>
                    <div className="stat-info">
                      <h3>100%</h3>
                      <p>Produse ecologice</p>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon">
                      <FaClock />
                    </div>
                    <div className="stat-info">
                      <h3>24/7</h3>
                      <p>Disponibilitate</p>
                    </div>
                  </div>

                  <div className="stat-card">
                    <div className="stat-icon">
                      <FaStar />
                    </div>
                    <div className="stat-info">
                      <h3>500+</h3>
                      <p>Clienți mulțumiți</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="container">
            <div className="mission-grid">
              <div className="mission-content">
                <h2>Misiunea Noastră</h2>
                <p>
                  Ne dorim să devenim partenerul tău de încredere pentru toate
                  nevoile de curățenie, oferind servicii de calitate superioară
                  la prețuri competitive.
                </p>
                <p>
                  Transparența, promptitudinea și respectul față de clienți sunt
                  pilonii activității noastre.
                </p>
                <ul className="mission-list">
                  <li>
                    <span>✓</span> Echipamente profesionale de ultimă generație
                  </li>
                  <li>
                    <span>✓</span> Produse eco-friendly și sigure
                  </li>
                  <li>
                    <span>✓</span> Personal calificat și bine pregătit
                  </li>
                  <li>
                    <span>✓</span> Soluții personalizate pentru fiecare client
                  </li>
                </ul>
              </div>
              <div className="mission-image">
                <img
                  src="assets/Images/misiunea-noastra.jpg"
                  alt="Misiunea noastră"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <div className="container">
            <div className="section-header">
              <h2>Galerie</h2>
              <p>Momente din activitatea noastră</p>
            </div>
            <div className="gallery-grid">
              {galleryImages.map((image, index) => (
                <div className="gallery-item" key={index}>
                  <img
                    src={image}
                    alt={`Galerie ${index + 1}`}
                    loading="lazy"
                  />
                  <div className="gallery-overlay"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <div className="section-header">
              <h2>Ce Spun Clienții Noștri</h2>
              <p>Părerea celor care ne-au ales</p>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="testimonial-text">
                  „Servicii impecabile! Personalul este amabil, profesionist și
                  mereu punctual. Recomand cu încredere.”
                </p>
                <div className="testimonial-author">
                  <h4>Andrei P.</h4>
                  <p>Client din 2018</p>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="testimonial-text">
                  „Am colaborat de multiple ori și sunt mereu impresionat de
                  calitatea serviciilor. Prețuri corecte pentru calitatea
                  oferită.”
                </p>
                <div className="testimonial-author">
                  <h4>Maria L.</h4>
                  <p>Clientă din 2019</p>
                </div>
              </div>

              <div className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <p className="testimonial-text">
                  „Au salvat apartamentul meu după renovare. Au făcut minuni cu
                  spațiul și l-au adus la un standard impecabil.”
                </p>
                <div className="testimonial-author">
                  <h4>Claudia N.</h4>
                  <p>Clientă din 2021</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="about-contact-info">
          <div className="container">
            <div className="about-contact-wrapper">
              <h2>Ne Găsești Aici</h2>
              <p className="about-contact-subheading">
                Pentru o ofertă personalizată sau orice întrebări
              </p>

              <div className="about-contact-methods">
                <div className="about-contact-method">
                  <div className="about-contact-icon">
                    <FaPhone />
                  </div>
                  <div className="about-contact-info-text">
                    <h4>Telefon</h4>
                    <a href="tel:+40745265769">+40 745 265 769</a>
                  </div>
                </div>

                <div className="about-contact-method">
                  <div className="about-contact-icon">
                    <FaEnvelope />
                  </div>
                  <div className="about-contact-info-text">
                    <h4>Email</h4>
                    <a href="mailto:contact@firmacurateniesibiu.ro">
                      contact@firmacurateniesibiu.ro
                    </a>
                  </div>
                </div>

                <div className="about-contact-method">
                  <div className="about-contact-icon">
                    <FaMapMarkerAlt />
                  </div>
                  <div className="about-contact-info-text">
                    <h4>Adresă</h4>
                    <p>Strada Călțun 26, Sibiu 550298</p>
                  </div>
                </div>
              </div>

              <a href="/contact" className="about-contact-cta">
                Cere Ofertă
              </a>
            </div>
          </div>
        </section>

        {/* Location Map Section */}
        <section className="about-company-location">
          <div className="container">
            <h2>Adresa noastră</h2>
            <div className="about-map-container">
              <iframe
                title="Locația noastră în Sibiu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.301646413103!2d24.150981015759548!3d45.79278957910632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c6787e1d099b1%3A0x5d232e07323a1d77!2sSibiu!5e0!3m2!1sro!2sro!4v1681234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
