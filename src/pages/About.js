import { Helmet } from 'react-helmet';
import React from 'react';
import '../styles.css';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Despre Noi | Firma Curățenie Sibiu</title>
        <meta name="description" content="Află mai multe despre echipa noastră și valorile care ne ghidează în fiecare proiect de curățenie." />
      </Helmet>

      <div className="page-content">
        <div className="about-container">
          <h1 className="page-title">Despre Echipa Noastră</h1>

          <div className="about-grid">
            <div className="about-image">
              <img 
                src="/image03.jpg" 
                alt="Echipa noastră de curățenie profesionistă" 
                className="about-img" 
                loading="lazy"
              />
            </div>

            <div className="about-text">
              <p className="paragraph">
                Suntem o echipă dinamică și dedicată, cu o pasiune pentru crearea de spații impecabile. 
                În Sibiu, transformăm locațiile comerciale și rezidențiale în medii curate și sănătoase.
              </p>
              
              <p className="paragraph">
                Folosim tehnologii moderne și produse eco-friendly pentru a oferi rezultate durabile, 
                întotdeauna adaptate nevoilor specifice ale fiecărui client.
              </p>

              <div className="about-features">
                <div className="feature-card">
                  <h3>10+ Ani Experiență</h3>
                  <p>Expertiză dovedită în curățenie profesională</p>
                </div>
                <div className="feature-card">
                  <h3>100% Ecologic</h3>
                  <p>Produse biodegradabile și siguranță</p>
                </div>
                <div className="feature-card">
                  <h3>Disponibili 24/7</h3>
                  <p>Răspundem rapid la orice solicitare</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reviews-section">
            <h2>Recenziile Clienților Noștri</h2>
            <div className="review-cards">
              <div className="review-card">
                <p>„Servicii impecabile! Personalul este amabil, profesionist și mereu punctual. Recomand cu încredere.”</p>
                <strong>- Andrei P.</strong>
              </div>
              <div className="review-card">
                <p>„Am colaborat de multiple ori și sunt mereu impresionat de calitatea serviciilor. Prețuri corecte pentru calitatea oferită.”</p>
                <strong>- Maria L.</strong>
              </div>
              <div className="review-card">
                <p>„Au salvat apartamentul meu după renovare. Au făcut minuni cu spațiul și l-au adus la un standard impecabil.”</p>
                <strong>- Claudia N.</strong>
              </div>
            </div>
          </div>

          <div className="map-container">
            <h2>Locația Noastră în Sibiu</h2>
            <iframe
              title="Locație Firma Curățenie Sibiu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.301646413103!2d24.150981015759548!3d45.79278957910632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474c6787e1d099b1%3A0x5d232e07323a1d77!2sSibiu!5e0!3m2!1sro!2sro!4v1681234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}
              allowFullScreen=""
              loading="lazy"
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
