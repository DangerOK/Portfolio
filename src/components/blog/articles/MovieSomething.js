import React from 'react';
import MoviesomethingThumb from '../../images/MoviesomethingThumb.png';

const MovieSomething = () => (
  <div className='article-wrapper'>
    <h1>MovieSomething</h1>
    <img src={MoviesomethingThumb} alt='site thumbnail' />
    <p> Using the MovieDB API, I built a site that lets you sort Movies by Genre, Rating, Realeas Date, and More. </p>
  </div>
)

export default MovieSomething
