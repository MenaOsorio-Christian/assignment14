// MovieList.js
import React from 'react';
import Movie from './Movie';

const MovieList = ({ movies }) => {
  const handleVote = (id, rating) => {
    // Update the rating for the given movie
    // This could be replaced with actual state management logic in a real application
    console.log(`Voted ${rating} stars for movie with id ${id}`);
  };

  const handleReviewSubmit = (id, review) => {
    // Add the review for the given movie
    // This could be replaced with actual state management logic in a real application
    console.log(`Submitted review "${review}" for movie with id ${id}`);
  };

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          movie={movie}
          onVote={(rating) => handleVote(movie.id, rating)}
          onReviewSubmit={(review) => handleReviewSubmit(movie.id, review)}
        />
      ))}
    </div>
  );
};

export default MovieList;
