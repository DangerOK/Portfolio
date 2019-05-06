import React from "react";

import PortfolioButton from "../portfolioButton/PortfolioButton";
import MoviesomethingThumb from "../../../../assets/images/resources/MoviesomethingThumb.png";

const MovieSomething = () => (
  <div className="project">
    <h2>MovieFinder DB</h2>
    <img src={MoviesomethingThumb} alt="site thumbnail" />
    <PortfolioButton
      name="Github"
      link="https://github.com/DangerOK/Movie-Something"
    />
    <PortfolioButton
      name="Live Demo"
      link="https://dangerok.github.io/Movie-Something"
    />
    <p>
      Web App using React.js, and theMovieDB API for searching for movies and
      filtering by rating, genre, realease year, and more.
    </p>
  </div>
);

export default MovieSomething;
