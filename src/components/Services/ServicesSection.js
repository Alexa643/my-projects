"use client";
import { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaCouch,
  FaMagic,
  FaTools,
  FaBuilding,
  FaStore,
  FaLeaf,
} from "react-icons/fa";

// Import components from their new, separate files
import ServiceCard from "./ServiceCard";
import EquipmentShowcase from "./EquipmentShowcase"; // New component
import ServiceDetails from "./ServiceDetails"; // New component
import "./ServicesSection.css"; // Keep main section styles

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);
  const detailsRef = useRef(null);

  const services = [
    {
      id: 1,
      title: "Curățenie Persoane Fizice",
      description: "Servicii complete de curățenie pentru locuințe private.",
      icon: <FaHome />,
      imageId: "assets/Images/curatenie-pers-fizica.jpg",
      detailedInfo: {
        title: "Curățenie pentru Persoane Fizice",
        description:
          "Oferim servicii complete de curățenie pentru locuințe private, adaptate nevoilor fiecărui client. Echipa noastră de profesioniști se ocupă de toate aspectele curățeniei, de la spații mici până la case și vile.",
        features: [
          "Curățenie generală și de întreținere",
          "Personal calificat și de încredere",
          "Produse ecologice certificate",
          "Program flexibil adaptat nevoilor dumneavoastră",
        ],
        process: [
          "Evaluarea inițială a spațiului",
          "Planificarea detaliată a activităților",
          "Executarea curățeniei cu echipamente profesionale",
          "Verificarea finală și feedback-ul clientului",
        ],
      },
    },
    {
      id: 2,
      title: "Curățat Tapițerii & Mochete",
      description: "Curățare profesională cu aparatul Tennant E5.",
      icon: <FaCouch />,
      imageId: "assets/Images/curatenie-tapiteri-mochete.jpg",
      detailedInfo: {
        title: "Curățat Tapițerii, Mochetă Fixă, Scaune și Colțare",
        description:
          "Serviciul nostru specializat de curățare a tapițeriilor și mochetelor utilizează tehnologia avansată Tennant E5. Acest aparat performant permite spălarea cu jet de spumă, frecarea cu perie la 1200 RPM și aspirarea simultană a murdăriei într-un recipient interior.",
        features: [
          "Eficiență mare în spălare: până la 400 mp/oră",
          "Design compact pentru spații greu accesibile",
          "Nivel scăzut de zgomot (69 dB)",
          "Uscare rapidă, traficul poate fi reluat în scurt timp",
        ],
        process: [
          "Pre-tratarea petelor și zonelor problematice",
          "Aplicarea soluției de curățare cu jet de spumă",
          "Frecarea intensivă cu peria rotativă",
          "Aspirarea simultană a lichidului și murdăriei",
          "Verificarea rezultatului și uscarea rapidă",
        ],
      },
    },
    {
      id: 3,
      title: "Curățenie Generală",
      description: "Curățenie completă și riguroasă pentru locuințe.",
      icon: <FaMagic />,
      imageId: "assets/Images/curatenie-generala.jpg",
      detailedInfo: {
        title: "Curățenie Generală și de Întreținere",
        description:
          "La curățenia generală se lucrează asiduu și riguros, punându-se accent pe fiecare detaliu. Serviciul nostru de curățenie generală este recomandat ca primă etapă, urmând ca ulterior să se efectueze curățenia de întreținere în mod regulat.",
        features: [
          "Curățenie completă de la tavan până la podea",
          "Atenție deosebită la detalii",
          "Produse profesionale pentru fiecare suprafață",
          "Personal instruit și echipat corespunzător",
        ],
        process: [
          "Aspirarea tavanului și a pereților, îndepărtarea pânzelor de păianjen",
          "Ștergerea și curățarea corpurilor de iluminat",
          "Aspirarea întregii suprafețe: gresie, parchet, mochetă, linoleum",
          "Spălarea geamurilor accesibile, pervazuri, rame și mânere",
          "Ștergerea prafului de pe mobilier și echipamente electronice",
          "Spălarea pardoselilor dure folosind soluții speciale",
          "Spălarea, dezinfectarea și odorizarea grupurilor sanitare și a bucătăriei",
          "Golirea și curățarea coșurilor de gunoi, aerisirea și odorizarea încăperilor",
        ],
      },
    },
    {
      id: 4,
      title: "Curățenie Apartamente Noi",
      description: "Servicii specializate pentru spații noi sau renovate.",
      icon: <FaTools />,
      imageId: "assets/Images/curatenie-apartamente-noi.jpg",
      detailedInfo: {
        title: "Curățenie Apartamente / Spații Noi",
        description:
          "După finalizarea lucrărilor de construcție sau renovare, spațiile necesită o curățenie profesională pentru a îndepărta toate urmele de materiale de construcție. Serviciul nostru specializat se ocupă de toate aspectele acestei curățenii dificile.",
        features: [
          "Îndepărtare completă a resturilor de construcție",
          "Curățare profesională a suprafețelor noi",
          "Echipamente specializate pentru curățenie post-construcție",
          "Atenție la detalii pentru un rezultat impecabil",
        ],
        process: [
          "Curățare geamuri, tocuri, uși de lavabilă, mortar, silicon",
          "Aspirarea întregii suprafețe",
          "Spălarea, decaparea și lustruirea pardoselilor",
          "Îndepărtarea petelor de var, vopsea",
          "Ștergerea prafului; curățarea prizelor, întrerupătoarelor și plintelor",
          "Îndepărtarea petelor de pe pereții lavabili",
        ],
      },
    },
    {
      id: 5,
      title: "Curățenie Birouri",
      description: "Servicii profesionale pentru spații de lucru.",
      icon: <FaBuilding />,
      imageId: "assets/Images/curatenie-birouri.jpg",
      detailedInfo: {
        title: "Curățenie Generală și de Întreținere Spații Birouri",
        description:
          "Oferim servicii complete de curățenie pentru spații de birouri, adaptate programului și specificului fiecărei companii. Menținem un mediu de lucru curat și sănătos pentru angajați, contribuind la productivitatea și imaginea profesională a afacerii dumneavoastră.",
        features: [
          "Program flexibil, în afara orelor de lucru",
          "Personal instruit pentru mediul de birou",
          "Produse profesionale non-agresive",
          "Rapoarte periodice de activitate",
        ],
        process: [
          "Aspirarea și curățarea tuturor suprafețelor",
          "Dezinfectarea zonelor cu trafic intens",
          "Curățarea echipamentelor de birou",
          "Întreținerea zonelor comune și a bucătăriilor",
          "Curățarea și dezinfectarea grupurilor sanitare",
          "Golirea coșurilor de gunoi și înlocuirea sacilor menajeri",
        ],
      },
    },
    {
      id: 6,
      title: "Curățenie Persoane Juridice",
      description: "Soluții complete pentru companii și instituții.",
      icon: <FaStore />,
      imageId: "assets/Images/curatenie-pers-juridice.jpg",
      detailedInfo: {
        title: "Curățenie pentru Persoane Juridice",
        description:
          "Companiile și instituțiile au nevoi specifice de curățenie, iar noi oferim soluții personalizate pentru fiecare client. De la birouri mici până la sedii corporative, asigurăm servicii profesionale de curățenie cu personal calificat și echipamente de ultimă generație.",
        features: [
          "Contracte personalizate pe termen lung",
          "Echipe dedicate pentru fiecare client",
          "Supervizare constantă a calității",
          "Flexibilitate în programare și servicii",
        ],
        process: [
          "Evaluarea nevoilor specifice ale companiei",
          "Elaborarea unui plan personalizat de curățenie",
          "Implementarea serviciilor conform programului stabilit",
          "Monitorizarea continuă a calității",
          "Raportare periodică și feedback",
        ],
      },
    },
    {
      id: 7,
      title: "Curățenie Spații Verzi",
      description: "Întreținerea și curățarea spațiilor exterioare.",
      icon: <FaLeaf />,
      imageId: "assets/Images/curatenie-spatii-verzi.jpg",
      detailedInfo: {
        title: "Curățenie Spații Verzi",
        description:
          "Serviciul nostru de curățenie pentru spații verzi asigură întreținerea și curățarea profesională a grădinilor, parcurilor și altor zone exterioare. Echipa noastră se ocupă de toate aspectele necesare pentru a menține spațiile verzi curate și îngrijite.",
        features: [
          "Întreținere regulată sau ocazională",
          "Echipamente specializate pentru exterior",
          "Personal calificat pentru spații verzi",
          "Soluții ecologice pentru mediul înconjurător",
        ],
        process: [
          "Evaluarea spațiului verde și planificarea activităților",
          "Curățarea aleilor și a zonelor pavate",
          "Colectarea și eliminarea deșeurilor vegetale",
          "Întreținerea mobilierului de grădină",
          "Curățarea elementelor decorative exterioare",
        ],
      },
    },
  ];

  const handleServiceClick = useCallback((serviceId) => {
    setSelectedService(serviceId);
    setTimeout(() => {
      detailsRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }, []);

  const handleCloseDetails = useCallback(() => {
    setSelectedService(null);
  }, []);

  const selectedServiceData = services.find(
    (service) => service.id === selectedService
  );

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="intro-section">
          <h2 className="intro-title">Servicii de Curățenie Profesionale</h2>
          <p className="intro-text">
            Firma Curățenie MORHAN din Sibiu oferă servicii complete de
            curățenie atât pentru persoane fizice, cât și pentru companii. Cu o
            experiență de peste 15 ani și un portofoliu de peste 300 de clienți
            mulțumiți, suntem alegerea ideală pentru toate nevoile dumneavoastră
            de curățenie.
          </p>
        </div>

        {/* Render the extracted EquipmentShowcase component */}
        <EquipmentShowcase />

        <div className="services-section-header">
          <h2 className="section-title">Serviciile Noastre</h2>
          <p className="section-subtitle">
            Selectați un serviciu pentru a afla mai multe detalii și informații
            complete
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onServiceClick={handleServiceClick}
            />
          ))}
        </div>

        {selectedService && selectedServiceData && (
          <div ref={detailsRef}>
            {/* Render the extracted ServiceDetails component */}
            <ServiceDetails
              service={selectedServiceData}
              onClose={handleCloseDetails}
            />
          </div>
        )}

        <div className="services-cta">
          <div className="cta-content">
            <h3 className="cta-title">Contactează-ne</h3>
            <p className="cta-subtitle">Apelează la Profesioniști!</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                Solicita Ofertă
              </Link>
            </div>
          </div>
          <div className="cta-image-placeholder">
            {/* Image now fits perfectly */}
            <img
              src="/assets/Images/imaginea-companiei-3.jpg"
              alt="Imagine Companie"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
