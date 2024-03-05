// Movie.js
import React, { useState } from 'react';
import Stars from './Stars';
import ReviewList from './ReviewList';
import ReviewForm from './ReviewForm';

const Movie = ({ movie, onVote, onReviewSubmit }) => {
  const [reviewText, setReviewText] = useState('');

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    onReviewSubmit(movie.id, reviewText);
    setReviewText('');
  };

  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <p>{movie.synopsis}</p>
      <p>Rating: {movie.rating}</p>
      <Stars onVote={(rating) => onVote(movie.id, rating)} />
      <ReviewList reviews={movie.reviews} />
      <ReviewForm
        reviewText={reviewText}
        onReviewTextChange={(e) => setReviewText(e.target.value)}
        onReviewSubmit={handleReviewSubmit}
      />
    </div>
  );
};

export default Movie;
