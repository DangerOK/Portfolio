import React from "react";
import "./Portfolio.css";
import MovieSomething from "./moviesomething/MovieSomething";
import PortfolioPage from "./portfolioPage/PortfolioPage";
import SemanticUiReactLayouts from "./semanticUiReactLayouts/SemanticUiReactLayouts";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="portfolio-container" id="Portfolio">
        <h3>Projects</h3>
        <div className="project-container">
          <SemanticUiReactLayouts />
          <MovieSomething />
          <PortfolioPage />
        </div>
      </div>
    );
  }
}

export default Portfolio;
