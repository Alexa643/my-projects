// Reviews.jsx
"use client";

import { useState } from "react";
import {
  FaStar,
  FaQuoteLeft,
  FaTimes,
  FaPaperPlane,
  FaUser,
  FaBuilding,
  FaMapMarkerAlt, // Added for location icon
} from "react-icons/fa";
import "./Reviews.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      author: "Maria",
      text: "Serviciile au fost excelente, iar echipa foarte profesionistă! Recomand cu drag!",
      rating: 5,
    },
    {
      id: 2,
      author: "Andrei Popescu",
      text: "Am fost impresionat de rapiditatea și calitatea curățeniei. Cu siguranță voi apela din nou.",
      rating: 4,
    },
    {
      id: 3,
      author: "Elena Vasilescu",
      text: "O experiență plăcută, personal amabil și rezultate impecabile. Mulțumesc!",
      rating: 5,
    },
  ]);

  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Dr. Laurentiu Streza",
      title: "Arhiepiscopul Sibiului",
      company: "Complexul Monahal Paltinis",
      location: "Sibiu",
      image: "assets/Images/bg-marturii-5.jpg",
      shortText:
        "Vă adresăm mulțumiri pentru serviciile de o calitate deosebită pe care firma dumneavoastră le-a prestat în cadrul Complexului Monahal Paltinis, Pavilionul Conferințe. În mod deosebit apreciem punctualitatea, seriozitatea și calitatea serviciului personalului calificat de care dispuneți.",
      fullText:
        "Vă adresăm mulțumiri pentru serviciile de o calitate deosebită pe care firma dumneavoastră le-a prestat în cadrul Complexului Monahal Paltinis, Pavilionul Conferințe. În mod deosebit apreciem punctualitatea, seriozitatea și calitatea serviciului personalului calificat de care dispuneți. Sperăm într-o bună colaborare și în viitor și vă recomandăm cu încredere tuturor celor interesați de serviciile dumneavoastră.",
      rating: 5,
    },
    {
      id: 2,
      name: "Petru Morosan",
      title: "Administrator",
      company: "Biserica Ortodoxă",
      location: "Sibiu",
      image: "assets/Images/bg-marturii-1.jpg",
      shortText:
        "Sunt foarte mulțumit de prestația celor de la firma de curățenie. Calitatea muncii a fost exemplară, nu a trebuit să mai facem nimic după ei. De asemenea, au făcut mai mult decât au spus și au terminat în timpul stabilit.",
      fullText:
        "Sunt foarte mulțumit de prestația celor de la firma de curățenie. Calitatea muncii a fost exemplară, nu a trebuit să mai facem nimic după ei. De asemenea, au făcut mai mult decât au spus și au terminat în timpul stabilit. Pe lângă toate astea, a fost ieftin!",
      rating: 5,
    },
    {
      id: 3,
      name: "Cristina Giurgiu",
      title: "Director Executiv",
      company: "RVE Sibiu",
      location: "Sibiu",
      image: "assets/Images/bg-marturii-2.jpg",
      shortText:
        "Fiind instituție publică, pragul ne este călcat destul de des, indiferent de anotimp. Asta înseamnă că există în permanență nevoia de curățenie. Încă de la început am apreciat profesionalismul și seriozitatea cu care și-au desfășurat munca.",
      fullText:
        "Fiind instituție publică, pragul ne este călcat destul de des, indiferent de anotimp. Asta înseamnă că există în permanență nevoia de curățenie. Încă de la început am apreciat profesionalismul și seriozitatea cu care și-au desfășurat munca, promptitudinea cu care au răspuns solicitărilor noastre și, practic, curățenia nu mai este o problemă pentru noi. O grijă în minus!",
      rating: 5,
    },
    {
      id: 4,
      name: "Ecaterina Sabau",
      title: "Proprietar",
      company: "Vila Turistică Casa Baltes",
      location: "Sibiu",
      image: "assets/Images/bg-marturii-3.jpg",
      shortText:
        "Ca vilă turistică căutăm să oferim clienților noștri camere curate, primitoare, bucătării igienizate corespunzător și băi adecvat dezinfectate. O treabă nu tocmai ușoară, dar îndeplinită cu succes de cei de la firma de curățenie 'MAII'.",
      fullText:
        "Ca vilă turistică căutăm să oferim clienților noștri camere curate, primitoare, bucătării igienizate corespunzător și băi adecvat dezinfectate. O treabă nu tocmai ușoară, dar îndeplinită cu succes de cei de la firma de curățenie 'MAII'. Sunt extrem de mulțumită de munca prestată. Sunt serioși, responsabili și foarte eficace în munca lor. Îi recomand cu toată încrederea. Vizitați pagina noastră de prezentare pe Facebook.",
      rating: 5,
    },
    {
      id: 5,
      name: "Varró Sándor",
      title: "Esperes-helyettes, A Brassói Református Egyházmegye",
      company: "Nagyszebeni Református Templom",
      location: "Brașov",
      image: "assets/Images/bg-marturii-4.jpg",
      shortText:
        "A Nagyszebeni Református Templom lelkészeként szeretettel ajánlom a Morhan család vállalkozásának igénybevételét. A méretük miatt évtizedek óta csak porszívozott templomi szőnyegjeinket alaposan kimosták, gyönyörűszépen megtisztították.",
      fullText:
        "A Nagyszebeni Református Templom lelkészeként szeretettel ajánlom a Morhan család vállalkozásának igénybevételét. A méretük miatt évtizedek óta csak porszívozott templomi szőnyegjeinket alaposan kimosták, gyönyörűszépen megtisztították visszaadván régi patinájukat. Komoly keresztyén emberek și ez meglátszik hozzáállásukban, komolyságukban és ügyfeleik tiszteletében, figyelmes kiszolgálásában.",
      rating: 5,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !text || rating === 0) return;
    const newReview = { id: Date.now(), author, text, rating };
    setReviews([newReview, ...reviews]);
    setAuthor("");
    setText("");
    setRating(0);
  };

  const renderStars = (current, interactive = false, onStarClick = null) =>
    [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`star ${i < current ? "active" : ""} ${
          interactive ? "interactive" : ""
        }`}
        onClick={() => interactive && onStarClick && onStarClick(i + 1)}
      />
    ));

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
  };

  const closeModal = () => {
    setSelectedTestimonial(null);
  };

  return (
    <div className="testimonials-reviews-container">
      <div className="main-content">
        <div className="content-grid">
          {/* Left Side - Testimonials */}
          <div className="testimonials-section">
            <div className="section-header">
              <h2 className="section-title">Recenzii ale clienților</h2>
              <p className="section-description">
                Vă redăm aici câteva mărturii ale clienților noștri. Veți
                observa că toți cei care au apelat la serviciile noastre au fost
                foarte mulțumiți. Am folosit de fiecare dată toată priceperea și
                dedicația noastră, dublate de materiale de curățenie și igienă
                de cea mai bună calitate. Cea mai mare parte a acestor clienți
                au devenit clienți stabili, care apelează la noi pe baze
                regulate.
              </p>
            </div>

            <div className="testimonials-list">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-image-wrapper">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.company} - ${testimonial.name}`}
                      className="testimonial-image"
                    />
                    <div className="testimonial-author-title">
                      <p className="author-name">{testimonial.name}</p>
                      <p className="author-details">
                        {testimonial.title}
                        {testimonial.company && ` • ${testimonial.company}`}
                        {testimonial.location && ` • ${testimonial.location}`}
                      </p>
                    </div>
                  </div>

                  <div className="testimonial-content">
                    <div className="testimonial-text-container">
                      <p className="testimonial-text">
                        {testimonial.shortText}
                      </p>
                    </div>

                    <div className="testimonial-meta">
                      <div className="rating">
                        {renderStars(testimonial.rating)}
                      </div>
                      <button
                        className="read-more-btn"
                        onClick={() => openModal(testimonial)}
                      >
                        Citește mai mult
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Reviews */}
          <div className="reviews-section">
            <div className="section-header">
              <h2 className="section-title">Lasă o recenzie</h2>
              <p className="section-description">
                Părerea ta contează! Ajută-ne să ne îmbunătățim serviciile
                lăsând o recenzie. Feedback-ul tău este valoros pentru noi.
              </p>
            </div>

            {/* Review Form */}
            <div className="review-form-container">
              <div className="form-card">
                <h3 className="form-title">Scrie o recenzie</h3>
                <form onSubmit={handleSubmit} className="review-form">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Numele tău"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Lasă o recenzie..."
                      rows={4}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      required
                      className="form-textarea"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Rating:</label>
                    <div className="rating-input">
                      {renderStars(rating, true, setRating)}
                    </div>
                  </div>
                  <button type="submit" className="submit-btn">
                    <FaPaperPlane className="icon" /> Trimite Recenzia
                  </button>
                </form>
              </div>
            </div>

            {/* Reviews List */}
            <div className="reviews-list">
              <h3 className="reviews-list-title">
                Recenziile clienților noștri
              </h3>
              {reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">
                        <span>{review.author.charAt(0).toUpperCase()}</span>
                      </div>
                      <span className="reviewer-name">{review.author}</span>
                    </div>
                    <div className="review-rating">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <div className="review-text-container">
                    <p className="review-text">{review.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedTestimonial && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <FaTimes />
            </button>
            <div className="modal-body">
              <div className="modal-testimonial-header">
                <div className="modal-image-frame">
                  <img
                    src={selectedTestimonial.image || "/placeholder.svg"}
                    alt={selectedTestimonial.name}
                    className="modal-client-image"
                  />
                </div>
                <div className="modal-client-details">
                  <h3 className="modal-client-name">
                    {selectedTestimonial.name}
                  </h3>
                  <p className="modal-client-title">
                    <FaUser className="icon" /> {selectedTestimonial.title}
                  </p>
                  <p className="modal-client-company">
                    <FaBuilding className="icon" />{" "}
                    {selectedTestimonial.company}
                  </p>
                  {selectedTestimonial.location && (
                    <p className="modal-client-location">
                      <FaMapMarkerAlt className="icon" />{" "}
                      {selectedTestimonial.location}
                    </p>
                  )}
                  <div className="modal-rating">
                    {renderStars(selectedTestimonial.rating)}
                  </div>
                </div>
              </div>

              <div className="modal-testimonial-container">
                <FaQuoteLeft className="modal-quote-icon" />
                <p className="modal-testimonial-text">
                  {selectedTestimonial.fullText}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reviews;
