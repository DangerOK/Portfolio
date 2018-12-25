import React from 'react';
import MoviesomethingThumb from '../../images/MoviesomethingThumb.png';

const MovieSomething = () => (
  <div className='project'>
    <a href='localhost:3001' target='_blank' rel="noopener noreferrer">
      <h2>MovieSomething</h2>
      <img src={MoviesomethingThumb} alt='site thumbnail' />
      <p>Web App using theMovieDB API for searching for movies by rating, genre, realease year, and more.</p>
    </a>
  </div>
)

export default MovieSomething;
