import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service, onServiceClick }) => {
  const handleClick = () => {
    onServiceClick(service.id);
  };

  return (
    <div className="service-card-container" onClick={handleClick}>
      <div className="service-icon-wrapper">{service.icon}</div>

      <div className="service-content-wrapper">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
      </div>

      <div className="service-footer-wrapper">
        <button className="service-details-button">
          Detalii <span className="button-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
