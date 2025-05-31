import React from 'react';
import { motion } from 'framer-motion';
import '../styles.css';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const ServiceCard = ({ icon, title, description }) => {
  return (
    <motion.div
      className="service-card"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
    >
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
