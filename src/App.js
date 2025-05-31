import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReviewsPage from "./pages/Reviews";
import ServicesSection from "./components/Services/ServicesSection";

import "./styles.css";
import Header from "./components/Header";
import LoginPage from "./auth/LoginPage";
import RegisterPage from "./auth/RegisterPage";
import PrivacyPolicyPage from "./auth/PrivacyPolicyPage";
import ForgotPassPage from "./auth/ForgotPassPage";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Incarcă stylesheet-ul temei activ
  useEffect(() => {
    const themeId = "theme-link";
    let themeLink = document.getElementById(themeId);

    if (!themeLink) {
      themeLink = document.createElement("link");
      themeLink.id = themeId;
      themeLink.rel = "stylesheet";
      document.head.appendChild(themeLink);
    }

    themeLink.href = `/themes/${darkMode ? "dark" : "light"}.css`;
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    // Ascultă preferințele sistemului (opțional)
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (!localStorage.getItem("theme")) {
        setDarkMode(e.matches);
      }
    };
    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, [darkMode]);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/despre" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recenzii" element={<ReviewsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/forgot-password" element={<ForgotPassPage />} />
            <Route path="/servicii" element={<ServicesSection />} />
         
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
