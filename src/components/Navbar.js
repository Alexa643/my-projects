import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Importăm useLocation
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaTools,
  FaStar,
  FaEnvelope,
  FaPhoneAlt, // Adăugăm iconița de telefon
} from "react-icons/fa";
import "./NavBarStyle.css"; // Asigură-te că calea este corectă

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Hook pentru a obține calea curentă

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  // Efect pentru scroll și pentru blocarea scroll-ului corpului când meniul e deschis
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Devine "scrolled" după 50px de scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen]);

  // Funcție pentru a determina dacă un link este activ
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <header
      className={`navbar-container ${darkMode ? "dark" : ""} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <nav className="navbar">
        {/* Logo-ul firmei */}
        <div className="navbar-logo-wrapper" onClick={closeMenu}>
          <Link to="/" className="logo">
            <img
              src="/assets/Images/logo01.png" // Asigură-te că această cale este corectă
              alt="Curățenie Morhan Logo"
              className="logo-img"
            />
            {/* Poți adăuga un text sau slogan lângă logo dacă dorești */}
            {/* <span className="logo-text">Curățenie Morhan</span> */}
          </Link>
        </div>

        {/* Link-urile de navigare principale */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link
              to="/"
              onClick={closeMenu}
              className={isActiveLink("/") ? "active-link" : ""}
              aria-current={isActiveLink("/") ? "page" : undefined}
            >
              <FaHome className="nav-icon" />
              <span>Acasă</span>
            </Link>
          </li>
          <li>
            <Link
              to="/despre"
              onClick={closeMenu}
              className={isActiveLink("/despre") ? "active-link" : ""}
              aria-current={isActiveLink("/despre") ? "page" : undefined}
            >
              <FaInfoCircle className="nav-icon" />
              <span>Despre Noi</span> {/* Am modificat textul pentru claritate */}
            </Link>
          </li>
          <li>
            <Link
              to="/servicii"
              onClick={closeMenu}
              className={isActiveLink("/servicii") ? "active-link" : ""}
              aria-current={isActiveLink("/servicii") ? "page" : undefined}
            >
              <FaTools className="nav-icon" />
              <span>Servicii</span>
            </Link>
          </li>
          <li>
            <Link
              to="/recenzii"
              onClick={closeMenu}
              className={isActiveLink("/recenzii") ? "active-link" : ""}
              aria-current={isActiveLink("/recenzii") ? "page" : undefined}
            >
              <FaStar className="nav-icon" />
              <span>Recenzii</span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className={isActiveLink("/contact") ? "active-link" : ""}
              aria-current={isActiveLink("/contact") ? "page" : undefined}
            >
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
            </Link>
          </li>
          {/* Adaugă numărul de telefon în meniul mobil */}
          {menuOpen && (
            <li className="mobile-phone-link">
              <a href="tel:+40745265769" onClick={closeMenu}>
                <FaPhoneAlt className="nav-icon" />
                <span>+4 0745 26 57 69</span>
              </a>
            </li>
          )}
        </ul>

        {/* Elementele din dreapta (Dark mode toggle, Hamburger) */}
        <div className="nav-right">
          <div className="phone-display-desktop">
            <a href="tel:+40745265769" className="phone-number-link">
              <FaPhoneAlt className="phone-icon" />
              <span className="phone-text">+4 0745 26 57 69</span>
            </a>
          </div>

          <button
            className={`dark-toggle ${darkMode ? "active" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
          >
            <FaSun className="icon-sun" />
            <FaMoon className="icon-moon" />
          </button>

          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label={menuOpen ? "Close Menu" : "Open Menu"}
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;