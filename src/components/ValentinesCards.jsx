import React, { useState } from 'react';
import './ValentinesCards.css';

const cards = [
  { image: "/images/image1.jpeg", text: "" },
  { image: "/images/image2.jpeg", text: "" },
  { image: "/images/image3.jpeg", text: "" },
  { image: "/images/image4.jpeg", text: "" },
  { image: "/images/image5.jpeg", text: "" }
];

export default function ValentinesCards() {
  const [flipped, setFlipped] = useState(Array(cards.length).fill(false));

  const toggleFlip = (index) => {
    setFlipped((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div
          key={index}
          className="card"
          onClick={() => toggleFlip(index)}
        >
          <div className={`card-inner ${flipped[index] ? 'is-flipped' : ''}`}>
            <div className="card-face card-front">
              <img src={card.image} alt={`Foto ${index + 1}`} />
            </div>
            <div className="card-face card-back">
              <p>{card.text}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}