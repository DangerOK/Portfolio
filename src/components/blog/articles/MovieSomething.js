import React from "react";
import MoviesomethingThumb from "../../../assets/images/resources/MoviesomethingThumb.png";

const MovieSomething = () => (
  <div className="article-wrapper">
    <h1>MovieFinder DB</h1>
    <img src={MoviesomethingThumb} alt="site thumbnail" />
    <p>
      Web App using React.js, and theMovieDB API for searching for movies and
      filtering by rating, genre, realease year, and more.
    </p>
  </div>
);

export default MovieSomething;
