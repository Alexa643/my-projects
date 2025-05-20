import React, { useState } from 'react';
import CardServiciu from '../components/CardServiciu';
import { FaBroom, FaBuilding, FaCouch } from 'react-icons/fa';

const serviciiData = [
  {
    id: 1,
    icon: <FaBroom size={40} color="#14b8a6" />,
    titlu: "Curățenie Generală",
    descriere: "Oferim servicii complete de curățenie pentru locuințe și spații comerciale, asigurând un mediu impecabil și proaspăt.",
    detalii: "Oferim curățenie completă pentru locuințe și spații comerciale, incluzând aspirarea și spălarea pardoselilor, curățarea suprafețelor, dezinfectarea băilor și bucătăriilor, ștergerea prafului și eliminarea petelor. Folosim produse profesionale, sigure pentru mediu și sănătate."
  },
  {
    id: 2,
    icon: <FaBuilding size={40} color="#14b8a6" />,
    titlu: "Curățenie Birouri",
    descriere: "Menținem birourile curate și ordonate, creând un spațiu de lucru plăcut și productiv pentru angajați și clienți.",
    detalii: "Birou impecabil? Curățenie profesională, spații proaspete și o atmosferă plăcută.Spațiile comune și sălile de meeting sunt întreținute zilnic pentru o atmosferă primitoare.Investim în curățenie pentru comfortul și productivitatea echipei dumneavoastră ✨",
  },
  {
    id: 3,
    icon: <FaCouch size={40} color="#14b8a6" />,
    titlu: "Curățenie Canapele",
    descriere: "Redăm prospețimea și aspectul inițial al canapelelor prin curățare profundă și eliminarea petelor și mirosurilor.",
    detalii: "Oferim curățare profundă pentru canapele, fotolii și tapițerii, utilizând soluții profesionale pentru eliminarea petelor, bacteriilor și mirosurilor neplăcute. Metoda noastră de extracție îndepărtează murdăria în profunzime, revitalizând textura și culoarea materialului.",
  },
];

const Servicii = () => {
  const [selectedServiciu, setSelectedServiciu] = useState(null);

  const closeModal = () => setSelectedServiciu(null);

  return (
    <section className="servicii-section">
      <h2 className="servicii-title">Serviciile Noastre</h2>
      <div className="servicii-grid">
        {serviciiData.map(({ id, icon, titlu, descriere }) => (
          <div key={id} onClick={() => setSelectedServiciu(id)} style={{ cursor: 'pointer' }}>
            <CardServiciu icon={icon} titlu={titlu} descriere={descriere} />
          </div>
        ))}
      </div>

{selectedServiciu && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="close-btn" onClick={closeModal}>X</button>
      <h3>{serviciiData.find(s => s.id === selectedServiciu).titlu}</h3>
      <p>{serviciiData.find(s => s.id === selectedServiciu).detalii}</p>
    </div>
  </div>
)}
    </section>
  );
};

export default Servicii;

