import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
// Importăm noul fișier CSS specific pentru ForgotPassPage
import "./ForgotPassPage.css";

const ForgotPassPage = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email-ul este obligatoriu";
    } else if (!validateEmail(email)) {
      newErrors.email = "Email-ul nu este valid";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setMessage(""); // Clear previous messages

    // Simulate API call for password reset
    setTimeout(() => {
      setIsLoading(false);
      // In a real application, you'd send an email here.
      setMessage(
        "Un link de resetare a parolei a fost trimis la adresa ta de email."
      );
      setEmail(""); // Clear the email field after submission
    }, 2000);
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Ai uitat parola?</h1>
        <p>
          Introdu adresa ta de email și îți vom trimite un link pentru a-ți
          reseta parola.
        </p>

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
                value={email}
                onChange={handleChange}
                className={errors.email ? "error" : ""}
              />
            </div>
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          {message && <p className="success-message">{message}</p>}

          <button type="submit" className="auth-button" disabled={isLoading}>
            {isLoading ? "Se trimite..." : "Resetează parola"}
          </button>

          <p className="auth-footer">
            Ți-ai amintit parola? <a href="/login">Conectează-te acum</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassPage;
