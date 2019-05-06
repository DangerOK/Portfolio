import React from "react";

import PortfolioButton from "../portfolioButton/PortfolioButton";
import Portfolio from "../../../../assets/images/resources/Portfolio.png";

const PortfolioPage = () => (
  <div className="project">
    <h2>Portfolio Page</h2>
    <img src={Portfolio} alt="site thumbnail" />
    <PortfolioButton
      name="Github"
      link="https://github.com/DangerOK/Portfolio"
    />
    <button className="portfolio-button">You Are Here!</button>
    <p>
      This site you're on right now was all made from scratch using React.js,
      React-Router, and CSS Modules.
    </p>
  </div>
);

export default PortfolioPage;
