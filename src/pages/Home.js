import React from "react";
import Servicii from "./Servicii";

const Home = () => {
  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/assets/Images/hero-cleaning.jpg")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          height: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          borderRadius: "12px",
          marginBottom: "60px",
        }}
      >
        <div className="hero-content">
          <h1
            style={{
              fontSize: "3rem",
              marginBottom: "20px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            Servicii Profesionale de Curățenie
          </h1>
          <p
            className="hero-subtitle"
            style={{
              fontSize: "1.5rem",
              maxWidth: "700px",
              margin: "0 auto",
            }}
          >
            Curățăm cu grijă și atenție spațiul tău pentru un mediu sănătos și
            primitor.
          </p>
        </div>
      </div>

      {/* SERVICES SECTION (folosim componenta Servicii importată) */}
      <Servicii />
    </div>
  );
};

export default Home;
