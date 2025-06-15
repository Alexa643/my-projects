import { MdClose, MdCheck, MdRefresh, MdPhone } from "react-icons/md";
import "./ServiceDetails.css";

const ServiceDetails = ({ service, onClose }) => {
  return (
    <div className="service-details-container">
      <div className="details-content-wrapper">
        <div className="details-header-section">
          <div className="header-content-wrapper">
            <h2 className="details-main-title">{service.detailedInfo.title}</h2>
            <button
              className="details-close-btn"
              onClick={onClose}
              aria-label="Închide detaliile"
            >
              <MdClose />
            </button>
          </div>
        </div>

        <div className="details-body-section">
          <div className="details-layout-grid">
            <div className="details-info-section">
              <div className="service-description-wrapper">
                <p>{service.detailedInfo.description}</p>
              </div>

              <div className="features-section-wrapper">
                <h3 className="section-title">
                  <span className="section-title-icon">
                    <MdCheck />
                  </span>
                  Caracteristici
                </h3>
                <ul className="features-list-grid">
                  {service.detailedInfo.features.map((feature, index) => (
                    <li key={index} className="feature-list-item">
                      <span className="feature-bullet-point">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="process-section-wrapper">
                <h3 className="section-title">
                  <span className="section-title-icon">
                    <MdRefresh />
                  </span>
                  Procesul de Lucru
                </h3>
                <div className="process-steps-container">
                  {service.detailedInfo.process.map((step, index) => (
                    <div key={index} className="process-step-item">
                      <div className="step-number-indicator">{index + 1}</div>
                      <div className="step-text-content">{step}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="details-visual-section">
              <div className="service-image-container">
                {service.imageId ? (
                  <div className="service-image-wrapper">
                    <img
                      src={service.imageId}
                      alt={service.title}
                      className="service-main-image"
                    />
                  </div>
                ) : (
                  <div className="service-image-placeholder">
                    <span>Imagine Serviciu</span>
                  </div>
                )}
              </div>

              <div className="contact-info-box">
                <h3 className="contact-section-title">
                  Interesat de acest serviciu?
                </h3>
                <p className="contact-description-text">
                  Contactează-ne pentru o ofertă personalizată
                </p>
                <div className="phone-contact-wrapper">
                  <MdPhone className="phone-contact-icon" />
                  <a href="tel:+40745265769" className="phone-contact-link">
                    +4 0745 26 57 69
                  </a>
                </div>
                <div className="contact-actions-wrapper">
                  <a href="/contact" className="contact-primary-btn">
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
