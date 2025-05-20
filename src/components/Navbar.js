import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import '../styles.css';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  return (
    <header className={`navbar-container ${darkMode ? 'dark' : ''}`}>
      <nav className="navbar">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src="/images/logo192.png"
            alt="Curățenie Morhan Logo"
            className="logo-img"
          />
          <span className="logo-text">Curățenie Morhan</span>
        </Link>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/"        onClick={closeMenu}>Acasă</Link></li>
          <li><Link to="/despre"  onClick={closeMenu}>Despre</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          <li><Link to="/servicii"onClick={closeMenu}>Servicii</Link></li>
          <li><Link to="/recenzii"onClick={closeMenu}>Recenzii</Link></li>
        </ul>

        <div className="nav-right">
          {/* Toggle button first */}
          <button
            className={`dark-toggle ${darkMode ? 'active' : ''}`}
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle Dark Mode"
          >
            <FaSun className="icon-sun" />
            <FaMoon className="icon-moon" />
          </button>

          {/* Hamburger button second (to the right) */}
          <button
            className="hamburger"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
