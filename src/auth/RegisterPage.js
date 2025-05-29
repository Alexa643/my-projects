import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaUser,
  FaGoogle,
  FaFacebook,
  FaGithub,
  FaCheck,
} from "react-icons/fa";
import "./RegisterPage.css";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return {
      length: password.length >= 8,
      upperCase: hasUpperCase,
      lowerCase: hasLowerCase,
      numbers: hasNumbers,
      specialChar: hasSpecialChar,
    };
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Prenumele este obligatoriu";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Numele este obligatoriu";
    }

    if (!formData.email) {
      newErrors.email = "Email-ul este obligatoriu";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email-ul nu este valid";
    }

    if (!formData.password) {
      newErrors.password = "Parola este obligatorie";
    } else {
      const passwordValidation = validatePassword(formData.password);
      if (!passwordValidation.length) {
        newErrors.password = "Parola trebuie să aibă cel puțin 8 caractere";
      }
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Confirmarea parolei este obligatorie";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Parolele nu se potrivesc";
    }

    if (!formData.acceptTerms) {
      newErrors.acceptTerms = "Trebuie să accepți termenii și condițiile";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulare apel API
    setTimeout(() => {
      setIsLoading(false);
      console.log("Register attempt:", formData);
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const passwordValidation = validatePassword(formData.password);

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="auth-card register-card">
        <div className="auth-header">
          <h1 className="auth-title">Creează cont nou</h1>
          <p className="auth-subtitle">Alătură-te comunității noastre</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="firstName" className="form-label">
                Prenume
              </label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.firstName ? "error" : ""}`}
                  placeholder="Prenumele tău"
                />
              </div>
              {errors.firstName && (
                <span className="error-message">{errors.firstName}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="lastName" className="form-label">
                Nume
              </label>
              <div className="input-wrapper">
                <FaUser className="input-icon" />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className={`form-input ${errors.lastName ? "error" : ""}`}
                  placeholder="Numele tău"
                />
              </div>
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`form-input ${errors.email ? "error" : ""}`}
                placeholder="exemplu@email.com"
              />
            </div>
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Parola
            </label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className={`form-input ${errors.password ? "error" : ""}`}
                placeholder="Creează o parolă"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}

            {formData.password && (
              <div className="password-strength">
                <div
                  className={`strength-item ${
                    passwordValidation.length ? "valid" : ""
                  }`}
                >
                  <FaCheck className="check-icon" />
                  Cel puțin 8 caractere
                </div>
                <div
                  className={`strength-item ${
                    passwordValidation.upperCase ? "valid" : ""
                  }`}
                >
                  <FaCheck className="check-icon" />O literă mare
                </div>
                <div
                  className={`strength-item ${
                    passwordValidation.lowerCase ? "valid" : ""
                  }`}
                >
                  <FaCheck className="check-icon" />O literă mică
                </div>
                <div
                  className={`strength-item ${
                    passwordValidation.numbers ? "valid" : ""
                  }`}
                >
                  <FaCheck className="check-icon" />
                  Un număr
                </div>
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmă parola
            </label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className={`form-input ${
                  errors.confirmPassword ? "error" : ""
                }`}
                placeholder="Confirmă parola"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword}</span>
            )}
          </div>

          <div className="form-group">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="checkbox"
              />
              <span className="checkmark"></span>
              Accept{" "}
              <a href="/terms" className="terms-link">
                termenii și condițiile
              </a>{" "}
              și{" "}
              <a href="/privacy" className="terms-link">
                politica de confidențialitate
              </a>
            </label>
            {errors.acceptTerms && (
              <span className="error-message">{errors.acceptTerms}</span>
            )}
          </div>

          <button
            type="submit"
            className="auth-button primary"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner"></div>
            ) : (
              "Creează contul"
            )}
          </button>

          <div className="divider">
            <span>sau</span>
          </div>

          <div className="social-buttons">
            <button type="button" className="social-button google">
              <FaGoogle />
              Google
            </button>
            <button type="button" className="social-button facebook">
              <FaFacebook />
              Facebook
            </button>
            <button type="button" className="social-button github">
              <FaGithub />
              GitHub
            </button>
          </div>

          <div className="auth-footer">
            <p>
              Ai deja cont?{" "}
              <a href="/login" className="auth-link">
                Conectează-te aici
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
