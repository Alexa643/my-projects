import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ReviewsPage from "./pages/Reviews";
import Servicii from "./pages/Servicii";
import "./styles.css";
import Header from "./components/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Verificăm localStorage și preferința sistemului
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    // Actualizăm clasa pe documentElement și în localStorage
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    // Ascultăm schimbările de preferință ale sistemului
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e) => {
      if (!localStorage.getItem("theme")) {
        setDarkMode(e.matches);
      }
    };
    mediaQuery.addEventListener("change", handler);

    return () => mediaQuery.removeEventListener("change", handler);
  }, [darkMode]);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/despre" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/recenzii" element={<ReviewsPage />} />
            <Route path="/servicii" element={<Servicii />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
