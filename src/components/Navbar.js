import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaSignInAlt } from "react-icons/fa";
import "./NavBarStyle.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
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

  const handleThemeToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDarkMode((prev) => !prev);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const navLinks = [
    { path: "/servicii", label: "Servicii" },
    { path: "/despre", label: "Despre" },
    { path: "/recenzii", label: "Recenzii" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" },
  ];

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
              <div className="logo-content">
                <img
                  src="/assets/Images/logo1.png"
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

            {/* Mobile Login */}
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
            {/* Desktop Login */}
            <Link to="/login" className="login-button-desktop">
              <FaSignInAlt className="login-icon" />
              <span>Logare</span>
            </Link>

            {/* Enhanced Dark/Light Toggle */}
            <button
              className={`theme-toggle ${darkMode ? "dark" : "light"} ${
                isAnimating ? "animating" : ""
              }`}
              onClick={handleThemeToggle}
              aria-label={`Switch to ${darkMode ? "light" : "dark"} mode`}
              disabled={isAnimating}
            >
              <div className="toggle-track">
                <div className="toggle-thumb">
                  {darkMode ? (
                    <FaMoon className="toggle-icon moon" />
                  ) : (
                    <FaSun className="toggle-icon sun" />
                  )}
                </div>
                <div className="toggle-crater"></div>
                <div className="toggle-stars">
                  {[1, 2, 3].map((star) => (
                    <div key={star} className="toggle-star"></div>
                  ))}
                </div>
              </div>
            </button>

            {/* Hamburger Menu */}
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

      {/* Overlay */}
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
