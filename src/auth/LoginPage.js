import React, { useState } from "react";
import {
  FaEye,
  FaEyeSlash,
  FaEnvelope,
  FaLock,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";
import "./LoginPage.css";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
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
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert(`Login reușit!\nEmail: ${formData.email}`);
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Bun venit!</h1>
        <p>Conectează-te la contul tău</p>

        <form onSubmit={handleSubmit} className="auth-form">
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
                  placeholder="Introdu parola"
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

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input type="checkbox" />
              Ține-mă conectat
            </label>
            <a href="/forgot-password" className="forgot-link">
              Ai uitat parola?
            </a>
          </div>

          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? "Se încarcă..." : "Conectează-te"}
          </button>

          <div className="divider">
            <span>sau</span>
          </div>

          <div className="social-buttons">
            <button type="button" className="social-button google">
              <FaGoogle /> Google
            </button>
            <button type="button" className="social-button facebook">
              <FaFacebook /> Facebook
            </button>
          </div>

          <p className="auth-footer">
            Nu ai cont? <a href="/register">Înregistrează-te aici</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
