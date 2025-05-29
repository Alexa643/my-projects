import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaSignInAlt } from "react-icons/fa";
import "./NavBarStyle.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  const isActiveLink = (path) => location.pathname === path;

  const navLinks = [
    { path: "/servicii", label: "Servicii" },
    { path: "/despre", label: "Despre" },
    { path: "/recenzii", label: "Recenzii" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`navbar-container ${darkMode ? "dark" : ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <nav className="navbar">
          {/* Logo Section */}
          <div className="navbar-logo-wrapper" onClick={closeMenu}>
            <Link to="/" className="logo">
              <div className="logo-content">
                <img
                  src="/assets/Images/logo.png"
                  alt="Company Logo"
                  className="logo-img"
                />
                <div className="logo-glow"></div>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.path} className="nav-item">
                <Link
                  to={link.path}
                  onClick={closeMenu}
                  className={`nav-link ${
                    isActiveLink(link.path) ? "active-link" : ""
                  }`}
                  aria-current={isActiveLink(link.path) ? "page" : undefined}
                >
                  <span className="nav-link-text">{link.label}</span>
                  <div className="nav-link-indicator"></div>
                </Link>
              </li>
            ))}

            {/* Mobile Login Button */}
            {menuOpen && (
              <li className="mobile-login-item">
                <Link
                  to="/login"
                  onClick={closeMenu}
                  className="login-button-mobile"
                >
                  <FaSignInAlt className="login-icon" />
                  <span>Login</span>
                </Link>
              </li>
            )}
          </ul>

          {/* Right Section */}
          <div className="nav-right">
            {/* Desktop Login Button */}
            <Link to="/login" className="login-button-desktop">
              <FaSignInAlt className="login-icon" />
              <span>Logare</span>
            </Link>

            {/* Dark Mode Toggle */}
            <button
              className={`dark-toggle ${darkMode ? "active" : ""}`}
              onClick={() => setDarkMode(!darkMode)}
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            >
              <div className="toggle-track">
                <div className="toggle-thumb">
                  <FaSun className="icon-sun" />
                  <FaMoon className="icon-moon" />
                </div>
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="hamburger"
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close Menu" : "Open Menu"}
            >
              <div className="hamburger-lines">
                <span
                  className={`line line1 ${menuOpen ? "active" : ""}`}
                ></span>
                <span
                  className={`line line2 ${menuOpen ? "active" : ""}`}
                ></span>
                <span
                  className={`line line3 ${menuOpen ? "active" : ""}`}
                ></span>
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
