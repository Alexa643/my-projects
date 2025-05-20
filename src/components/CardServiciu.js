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
      ease: 'easeOut'
    }
  }
};

const CardServiciu = ({ icon, titlu, descriere }) => {
  return (
    <motion.div
      className="card-serviciu"
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
    >
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{titlu}</h3>
      <p className="card-description">{descriere}</p>
    </motion.div>
  );
};

export default CardServiciu;



