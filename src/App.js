import './App.css';
import React from 'react';
import MovieList from './MovieList';
import { movies } from './Data';


const App = () => {
  return (
    <div className="app">
      <h1>Movie Review App</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
