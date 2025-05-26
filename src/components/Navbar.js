import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";
import "./NavBarStyle.css"; // Ensure this path is correct relative to Navbar.jsx

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  useEffect(() => {
    // This effect handles preventing body scroll when menu or modal is open
    document.body.style.overflow =
      menuOpen || isLoginModalOpen ? "hidden" : "auto";

    const handleScroll = () => {
      // Sets 'scrolled' state based on scroll position for sticky header effect
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [menuOpen, isLoginModalOpen]); // Dependencies for useEffect

  // Determines if a link is active based on the current path
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <header
        className={`navbar-container ${darkMode ? "dark" : ""} ${
          scrolled ? "scrolled" : ""
        }`}
      >
        <nav className="navbar">
          {/* Logo */}
          <div className="navbar-logo-wrapper" onClick={closeMenu}>
            <Link to="/" className="logo">
              <img
                src="/assets/Images/logo.png" // Ensure this path is correct from your public folder
                alt="Company Logo"
                className="logo-img"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
            <li>
              <Link
                to="/despre"
                onClick={closeMenu}
                className={isActiveLink("/despre") ? "active-link" : ""}
                aria-current={isActiveLink("/despre") ? "page" : undefined}
              >
                Despre Noi
              </Link>
            </li>
            <li>
              <Link
                to="/servicii"
                onClick={closeMenu}
                className={isActiveLink("/servicii") ? "active-link" : ""}
                aria-current={isActiveLink("/servicii") ? "page" : undefined}
              >
                Servicii
              </Link>
            </li>
            <li>
              <Link
                to="/recenzii"
                onClick={closeMenu}
                className={isActiveLink("/recenzii") ? "active-link" : ""}
                aria-current={isActiveLink("/recenzii") ? "page" : undefined}
              >
                Recenzii
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={closeMenu}
                className={isActiveLink("/contact") ? "active-link" : ""}
                aria-current={isActiveLink("/contact") ? "page" : undefined}
              >
                Contact
              </Link>
            </li>

            {/* Mobile Login Button - Only visible when menu is open on mobile */}
            {menuOpen && (
              <li className="mobile-login-trigger">
                <button
                  onClick={() => {
                    closeMenu();
                    openLoginModal();
                  }}
                  className="login-button-mobile"
                >
                  <FaSignInAlt /> Login
                </button>
              </li>
            )}
          </ul>

          {/* Right-side Elements */}
          <div className="nav-right">
            {/* Desktop Login Button */}
            <button className="login-button-desktop" onClick={openLoginModal}>
              Login
            </button>

            {/* Dark Mode Toggle */}
            <button
              className={`dark-toggle ${darkMode ? "active" : ""}`}
              onClick={() => setDarkMode(!darkMode)}
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
            >
              <FaSun className="icon-sun" />
              <FaMoon className="icon-moon" />
            </button>

            {/* Hamburger Menu (for mobile) */}
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

      {/* Login Modal */}
      {isLoginModalOpen && (
        <>
          <div className="modal-overlay" onClick={closeLoginModal}></div>
          <div className="login-modal">
            <button className="close-button" onClick={closeLoginModal}>
              <FaTimes size={24} />
            </button>
            <h2>Autentificare</h2>
            <div className="modal-options">
              <Link
                to="/login"
                onClick={closeLoginModal}
                className="modal-option-btn"
              >
                <FaSignInAlt className="modal-icon" />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                onClick={closeLoginModal}
                className="modal-option-btn"
              >
                <FaUserPlus className="modal-icon" />
                <span>Register</span>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
