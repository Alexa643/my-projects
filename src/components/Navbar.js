import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaTools,
  FaStar,
} from "react-icons/fa";
import "./NavBarStyle.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  return (
    <header
      className={`navbar-container ${darkMode ? "dark" : ""} ${
        scrolled ? "scrolled" : ""
      }`}
    >
      <nav className="navbar">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/assets/Images/logo-alb-negru.png"
            alt="Curățenie Morhan"
            className="logo-img"
          />
        </Link>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/" onClick={closeMenu}>
              <FaHome className="nav-icon" />
              <span>Acasă</span>
            </Link>
          </li>
          <li>
            <Link to="/despre" onClick={closeMenu}>
              <FaInfoCircle className="nav-icon" />
              <span>Despre</span>
            </Link>
          </li>
          <li>
            <Link to="/servicii" onClick={closeMenu}>
              <FaTools className="nav-icon" />
              <span>Servicii</span>
            </Link>
          </li>
          <li>
            <Link to="/recenzii" onClick={closeMenu}>
              <FaStar className="nav-icon" />
              <span>Recenzii</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              <FaEnvelope className="nav-icon" />
              <span>Contact</span>
            </Link>
          </li>
        </ul>

        <div className="nav-right">
          <button
            className={`dark-toggle ${darkMode ? "active" : ""}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
          >
            <FaSun className="icon-sun" />
            <FaMoon className="icon-moon" />
          </button>

          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
