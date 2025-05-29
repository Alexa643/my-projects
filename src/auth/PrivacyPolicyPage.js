import React from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicyPage.css"; // Link to the new CSS file

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-container">
      <div className="privacy-card">
        <h1>Politica de Confidențialitate</h1>
        <p className="privacy-intro">
          Această Politică de Confidențialitate descrie modul în care{" "}
          <span className="app-name">[Curatenie Morhan Sibiu]</span> colectează,
          utilizează și protejează informațiile dumneavoastră personale în
          conformitate cu Regulamentul General privind Protecția Datelor (GDPR)
          și legislația română în vigoare.
        </p>

        <section className="privacy-section">
          <h2>1. Ce date colectăm?</h2>
          <p>Colectăm următoarele tipuri de date personale:</p>
          <ul>
            <li>**Date de identificare:** Nume, prenume, adresă de e-mail.</li>
            <li>
              **Date tehnice:** Adresă IP, tipul browserului, sistemul de
              operare, informații despre dispozitivul utilizat pentru accesarea
              serviciilor noastre.
            </li>
            <li>
              **Date de utilizare:** Informații despre modul în care
              interacționați cu site-ul/aplicația noastră.
            </li>
            <li>
              **Alte date:** Orice alte informații pe care alegeți să ni le
              furnizați.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>2. Cum colectăm datele dumneavoastră?</h2>
          <p>Colectăm datele dumneavoastră prin:</p>
          <ul>
            <li>
              **Interacțiuni directe:** Când vă înregistrați, completați
              formulare, ne contactați sau utilizați serviciile noastre.
            </li>
            <li>
              **Tehnologii automatizate:** Prin cookie-uri și tehnologii
              similare atunci când navigați pe site-ul nostru.
            </li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. De ce colectăm aceste date? (Scopul prelucrării)</h2>
          <p>Utilizăm datele dumneavoastră pentru următoarele scopuri:</p>
          <ul>
            <li>Furnizarea și îmbunătățirea serviciilor noastre.</li>
            <li>Gestionarea contului dumneavoastră.</li>
            <li>Comunicarea cu dumneavoastră.</li>
            <li>Personalizarea experienței dumneavoastră.</li>
            <li>Analiza utilizării site-ului pentru optimizare.</li>
            <li>Respectarea obligațiilor legale.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Cui dezvăluim datele dumneavoastră?</h2>
          <p>
            Nu vindem, nu închiriem și nu transferăm datele dumneavoastră
            personale către terți, cu excepția cazurilor în care:
          </p>
          <ul>
            <li>
              Este necesar pentru furnizarea serviciilor (ex: parteneri de
              plată).
            </li>
            <li>Suntem obligați prin lege.</li>
            <li>Cu consimțământul dumneavoastră expres.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. Drepturile dumneavoastră conform GDPR</h2>
          <p>Conform GDPR, aveți următoarele drepturi:</p>
          <ul>
            <li>Dreptul la informare</li>
            <li>Dreptul de acces</li>
            <li>Dreptul la rectificare</li>
            <li>Dreptul la ștergerea datelor ("dreptul de a fi uitat")</li>
            <li>Dreptul la restricționarea prelucrării</li>
            <li>Dreptul la portabilitatea datelor</li>
            <li>Dreptul la opoziție</li>
            <li>
              Drepturi legate de procesul decizional automatizat și profilare
            </li>
            <li>
              Dreptul de a depune o plângere la Autoritatea Națională de
              Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
            </li>
          </ul>
          <p>
            Pentru a exercita oricare dintre aceste drepturi, vă rugăm să ne
            contactați la{" "}
            <a href="mailto:contact@compania-ta.ro" className="privacy-link">
              curatenie.morhan@gmail.com
            </a>
            .
          </p>
        </section>

        <section className="privacy-section">
          <h2>6. Securitatea datelor</h2>
          <p>
            Am implementat măsuri tehnice și organizaționale adecvate pentru a
            proteja datele dumneavoastră personale împotriva accesului
            neautorizat, pierderii, distrugerii sau modificării.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Modificări ale Politicii de Confidențialitate</h2>
          <p>
            Ne rezervăm dreptul de a actualiza această Politică de
            Confidențialitate periodic. Orice modificări vor fi publicate pe
            această pagină.
          </p>
        </section>

        <p className="privacy-date">Ultima actualizare: 29 mai 2025</p>

        <Link to="/register" className="back-button">
          Înapoi la Înregistrare
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
