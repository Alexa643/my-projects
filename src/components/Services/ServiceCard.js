"use client";
import React from "react";
import "./ServiceCard.css";

const ServiceCard = ({ service, onServiceClick }) => {
  const handleClick = () => {
    onServiceClick(service.id);
  };

  return (
    <div className="service-card" onClick={handleClick}>
      <div className="card-icon">{service.icon}</div>

      <div className="card-content">
        <h3 className="card-title">{service.title}</h3>
        <p className="card-description">{service.description}</p>
      </div>

      <div className="card-footer">
        <button className="card-button">
          Detalii <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
