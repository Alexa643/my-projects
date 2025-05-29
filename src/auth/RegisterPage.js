import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebook,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./RegisterPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false); // New state for privacy policy
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "Prenumele este obligatoriu";
    }
    if (!formData.lastName) {
      newErrors.lastName = "Numele este obligatoriu";
    }
    if (!formData.email) {
      newErrors.email = "Email-ul este obligatoriu";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email-ul nu este valid";
    }
    if (!formData.password) {
      newErrors.password = "Parola este obligatorie";
    } else if (formData.password.length < 6) {
      newErrors.password = "Parola trebuie să aibă cel puțin 6 caractere";
    }
    if (!agreedToPrivacy) { // New validation for privacy policy
      newErrors.privacyPolicy = "Trebuie să accepți Politica de Confidențialitate";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      alert(
        `Înregistrare reușită!\nNume: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nAcord Politică de Confidențialitate: ${agreedToPrivacy ? "Da" : "Nu"}`
      );
      // Here you would typically redirect the user or clear the form
      setFormData({ firstName: "", lastName: "", email: "", password: "" });
      setAgreedToPrivacy(false); // Reset checkbox
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Creează un cont nou!</h1>
        <p>Completează detaliile de mai jos pentru a te înregistra</p>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="firstName">Prenume</label>
            <div className="input-row">
              <FaUser className="input-icon-outside" />
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Introdu prenumele"
                value={formData.firstName}
                onChange={handleChange}
                className={errors.firstName ? "error" : ""}
              />
            </div>
            {errors.firstName && (
              <span className="error-message">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Nume</label>
            <div className="input-row">
              <FaUser className="input-icon-outside" />
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Introdu numele"
                value={formData.lastName}
                onChange={handleChange}
                className={errors.lastName ? "error" : ""}
              />
            </div>
            {errors.lastName && (
              <span className="error-message">{errors.lastName}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <div className="input-row">
              <FaEnvelope className="input-icon-outside" />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="exemplu@email.com"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
            </div>
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Parola</label>
            <div className="input-row">
              <FaLock className="input-icon-outside" />
              <div className="password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Creează o parolă"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? "error" : ""}
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          {/* New Privacy Policy Checkbox */}
          <div className="form-group privacy-policy-group">
            <input
              type="checkbox"
              id="agreedToPrivacy"
              name="agreedToPrivacy"
              checked={agreedToPrivacy}
              onChange={(e) => {
                setAgreedToPrivacy(e.target.checked);
                if (errors.privacyPolicy) {
                  setErrors((prev) => ({ ...prev, privacyPolicy: "" }));
                }
              }}
              className={errors.privacyPolicy ? "error-checkbox" : ""}
            />
            <label htmlFor="agreedToPrivacy" className="privacy-label">
              Sunt de acord cu{" "}
              <Link to="/privacy-policy" className="privacy-link" target="_blank" rel="noopener noreferrer">
                Politica de Confidențialitate
              </Link>
            </label>
            {errors.privacyPolicy && (
              <span className="error-message">{errors.privacyPolicy}</span>
            )}
          </div>

          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? "Se încarcă..." : "Înregistrează-te"}
          </button>

          <div className="divider">
            <span>sau</span>
          </div>

          <div className="social-buttons">
            <button type="button" className="social-button google">
              <FaGoogle /> Înregistrează-te cu Google
            </button>
            <button type="button" className="social-button facebook">
              <FaFacebook /> Înregistrează-te cu Facebook
            </button>
          </div>

          <p className="auth-footer">
            Ai deja cont? <a href="/login">Conectează-te aici</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;