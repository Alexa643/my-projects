import React, { useState } from 'react';
import ServiceCard from '../components/ServiceCard';
import { FaBroom, FaBuilding, FaCouch } from 'react-icons/fa';

const servicesData = [
  {
    id: 1,
    icon: <FaBroom size={40} color="#14b8a6" />,
    title: "General Cleaning",
    description: "We offer complete cleaning services for homes and commercial spaces, ensuring a spotless and fresh environment.",
    details: "We provide full cleaning services for homes and commercial areas, including vacuuming and mopping floors, surface cleaning, bathroom and kitchen disinfection, dusting, and stain removal. We use professional products that are safe for the environment and health.",
  },
  {
    id: 2,
    icon: <FaBuilding size={40} color="#14b8a6" />,
    title: "Office Cleaning",
    description: "We keep offices clean and tidy, creating a pleasant and productive workspace for employees and clients.",
    details: "Impeccable office? Professional cleaning, fresh spaces, and a welcoming atmosphere. Common areas and meeting rooms are maintained daily for a pleasant environment. We invest in cleanliness for your team's comfort and productivity ✨",
  },
  {
    id: 3,
    icon: <FaCouch size={40} color="#14b8a6" />,
    title: "Couch Cleaning",
    description: "We restore the freshness and original appearance of couches through deep cleaning and removal of stains and odors.",
    details: "We offer deep cleaning for couches, armchairs, and upholstery, using professional solutions to remove stains, bacteria, and unpleasant odors. Our extraction method removes deep-seated dirt, revitalizing the fabric's texture and color.",
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const closeModal = () => setSelectedService(null);

  return (
    <section className="services-section">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {servicesData.map(({ id, icon, title, description }) => (
          <div key={id} onClick={() => setSelectedService(id)} style={{ cursor: 'pointer' }}>
            <ServiceCard icon={icon} title={title} description={description} />
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>X</button>
            <h3>{servicesData.find(s => s.id === selectedService).title}</h3>
            <p>{servicesData.find(s => s.id === selectedService).details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
