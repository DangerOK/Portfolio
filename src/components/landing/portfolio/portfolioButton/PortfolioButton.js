import React from "react";
import "./PortfolioButton.css";

const PortfolioButton = props => (
  <a href={props.link} target="_blank" rel="noopener noreferrer">
    <button className="portfolio-button">{props.name}</button>
  </a>
);

export default PortfolioButton;
