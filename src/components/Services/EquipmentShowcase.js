"use client";
import React, { useState } from "react";
import { MdSpeed, MdDesignServices, MdVolumeOff, MdAir } from "react-icons/md";
import "./EquipmentShowcase.css"; // Create a new CSS file for this component if needed, or include styles in ServicesSection.css

const EquipmentShowcase = () => {
  const [activeSpec, setActiveSpec] = useState(0);

  const specifications = [
    {
      title: "Eficiență Maximă",
      value: "400 mp/oră",
      description: "Capacitate de curățare excepțională pentru proiecte mari",
      icon: <MdSpeed />,
    },
    {
      title: "Design Compact",
      value: "Mobilitate",
      description: "Acces ușor în spații aglomerate sau greu accesibile",
      icon: <MdDesignServices />,
    },
    {
      title: "Nivel Scăzut Zgomot",
      value: "69 dB",
      description: "Funcționare silențioasă pentru medii sensibile",
      icon: <MdVolumeOff />,
    },
    {
      title: "Uscare Rapidă",
      value: "Instant",
      description: "Traficul poate fi reluat în scurt timp",
      icon: <MdAir />,
    },
  ];

  return (
    <section className="equipment-showcase">
      <div className="showcase-container">
        <div className="showcase-header">
          <h2 className="showcase-title">Echipamentul Nostru Profesional</h2>
          <p className="showcase-subtitle">
            Tehnologie de vârf pentru rezultate excepționale
          </p>
        </div>

        <div className="equipment-main">
          <div className="equipment-visual">
            <div className="equipment-image-container">
              <div className="equipment-badge">
                <span className="badge-text">TENNANT E5</span>
              </div>
              <div className="equipment-image-placeholder">
                <img
                  src="/assets/Images/e5.png"
                  alt="Tennant E5"
                  className="imagine-product"
                />
              </div>

              <div className="equipment-features-visual">
                <div
                  className="feature-point"
                  style={{ top: "20%", left: "15%" }}
                >
                  <div className="point-marker">1</div>
                  <div className="point-tooltip">Jet de Spumă</div>
                </div>
                <div
                  className="feature-point"
                  style={{ top: "45%", left: "70%" }}
                >
                  <div className="point-marker">2</div>
                  <div className="point-tooltip">Perie 1200 RPM</div>
                </div>
                <div
                  className="feature-point"
                  style={{ top: "70%", left: "30%" }}
                >
                  <div className="point-marker">3</div>
                  <div className="point-tooltip">Aspirare Simultană</div>
                </div>
              </div>
            </div>
          </div>

          <div className="equipment-info">
            <h3 className="equipment-name">Tennant E5</h3>
            <p className="equipment-description">
              Aparatul Tennant E5 este soluția noastră profesională pentru
              curățarea tapițeriilor și mochetelor. Acest echipament de ultimă
              generație permite <strong>spălarea cu jet de spumă</strong>,{" "}
              <strong>frecarea cu o perie la 1200 RPM</strong> și{" "}
              <strong>aspirarea lichidului și murdăriei</strong> într-un
              recipient interior, totul în același timp.
            </p>

            <div className="process-steps">
              <h4 className="process-title">Procesul de Curățare în 3 Pași:</h4>
              <div className="steps-container">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h5>Spălare cu Jet de Spumă</h5>
                    <p>
                      Aplicarea soluției de curățare prin jet de spumă pentru
                      penetrarea profundă
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h5>Frecare la 1200 RPM</h5>
                    <p>
                      Peria rotativă de înaltă performanță îndepărtează murdăria
                      încăpățânată
                    </p>
                  </div>
                </div>
                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h5>Aspirare Simultană</h5>
                    <p>
                      Colectarea imediată a lichidului și murdăriei în
                      recipientul interior
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="specifications-grid">
          {specifications.map((spec, index) => (
            <div
              key={index}
              className={`spec-card ${activeSpec === index ? "active" : ""}`}
              onMouseEnter={() => setActiveSpec(index)}
            >
              <div className="spec-icon">{spec.icon}</div>
              <div className="spec-content">
                <h4 className="spec-title">{spec.title}</h4>
                <div className="spec-value">{spec.value}</div>
                <p className="spec-description">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentShowcase;
