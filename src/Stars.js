// Stars.js
import React, { useState } from 'react';

const Stars = ({ onVote }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className="stars">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "star active" : "star"}
          onClick={() => {
            setRating(star);
            onVote(star);
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Stars;
