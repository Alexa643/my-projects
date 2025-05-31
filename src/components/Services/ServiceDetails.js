import { MdClose, MdCheck, MdRefresh, MdPhone } from "react-icons/md";
import "./ServiceDetails.css";

const ServiceDetails = ({ service, onClose }) => {
  return (
    <div className="service-details">
      <div className="details-container">
        <div className="details-header">
          <div className="header-content">
            <h2 className="details-title">{service.detailedInfo.title}</h2>
            <button
              className="close-button"
              onClick={onClose}
              aria-label="Închide detaliile"
            >
              <MdClose />
            </button>
          </div>
        </div>

        <div className="details-content">
          <div className="details-grid">
            <div className="details-info">
              <div className="service-description">
                <p>{service.detailedInfo.description}</p>
              </div>

              <div className="features-section">
                <h3 className="section-subtitle">
                  <span className="section-icon">
                    <MdCheck />
                  </span>
                  Caracteristici
                </h3>
                <ul className="features-list">
                  {service.detailedInfo.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-bullet">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="process-section">
                <h3 className="section-subtitle">
                  <span className="section-icon">
                    <MdRefresh />
                  </span>
                  Procesul de Lucru
                </h3>
                <div className="process-steps-details">
                  {service.detailedInfo.process.map((step, index) => (
                    <div key={index} className="process-step-detail">
                      <div className="step-number-detail">{index + 1}</div>
                      <div className="step-text-detail">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="details-image">
              <div className="image-container">
                {service.imageId ? (
                  <div
                    className="service-image-placeholder"
                    data-image-id={service.imageId}
                  >
                    <span>Imagine Serviciu</span>
                    <span className="image-id">{service.imageId}</span>
                  </div>
                ) : (
                  <div className="service-image-placeholder">
                    <span>Imagine Serviciu</span>
                  </div>
                )}
              </div>

              <div className="contact-box">
                <h3 className="contact-title">Interesat de acest serviciu?</h3>
                <p className="contact-text">
                  Contactează-ne pentru o ofertă personalizată
                </p>
                <div className="phone-contact">
                  <MdPhone className="phone-icon" />
                  <a href="tel:+40745265769" className="phone-link">
                    +4 0745 26 57 69
                  </a>
                </div>
                <div className="contact-buttons">
                  <a href="/contact" className="contact-btn primary">
                    Solicită Ofertă
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
