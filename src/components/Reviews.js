import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import "../styles.css"; // asigură-te că ai legat fișierul CSS

const Reviews = () => {
  const [reviews, setReviews] = useState([
    { id: 1, author: "Maria", text: "Foarte mulțumită de servicii!", rating: 5 },
    { id: 2, author: "Andrei", text: "Recomand cu încredere!", rating: 4 },
  ]);

  const [author, setAuthor] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author || !text || rating === 0) return;
    const newReview = { id: Date.now(), author, text, rating };
    setReviews([newReview, ...reviews]);
    setAuthor("");
    setText("");
    setRating(0);
  };

  const renderStars = (current) =>
    [...Array(5)].map((_, i) => (
      <FaStar
        key={i}
        className={`star ${i < current ? "active" : ""}`}
        onClick={() => setRating(i + 1)}
      />
    ));

  return (
    <section className="review-section">
      <div className="review-container">
        <h2 className="review-title">Ce spun clienții noștri</h2>

        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Numele tău"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <textarea
            placeholder="Lasă o recenzie..."
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <div className="rating-select">{renderStars(rating)}</div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Trimite Recenzia
          </motion.button>
        </form>

        <div className="review-list">
          {reviews.map(({ id, author, text, rating }) => (
            <motion.div
              key={id}
              className="review-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="card-stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`star ${i < rating ? "active" : ""}`}
                  />
                ))}
              </div>
              <p className="card-text">“{text}”</p>
              <p className="card-author">– {author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
