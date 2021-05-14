import React from "react";
import "./Portfolio.css";
import MovieSomething from "./moviesomething/MovieSomething";
import PortfolioPage from "./portfolioPage/PortfolioPage";
import SemanticUiReactLayouts from "./semanticUiReactLayouts/SemanticUiReactLayouts";
import RemyWorkouts from "./remyworkouts/RemyWorkouts";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio-container" id="Portfolio">
        <h3>Portfolio</h3>
        <div className="project-container">
          <RemyWorkouts />
          <MovieSomething />
          <SemanticUiReactLayouts />
          <PortfolioPage />
        </div>
      </div>
    );
  }
}

export default Portfolio;
