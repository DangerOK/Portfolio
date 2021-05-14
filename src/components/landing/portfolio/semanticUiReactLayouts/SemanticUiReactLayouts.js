import React from "react";

import PortfolioButton from "../portfolioButton/PortfolioButton";

import SemanticUiReactLayoutsThumb from "../../../../assets/images/resources/SemanticUiReactLayoutsThumb.png";

const SemanticUiReactLayouts = () => (
  <div className="project">
    <h2>Semantic-UI React Templates</h2>
    <img src={SemanticUiReactLayoutsThumb} alt="site thumbnail" />
    <div className='portfolio-button-wrapper'>
      <PortfolioButton
        name="Github"
        link="https://github.com/DangerOK/Sematic-UI-React-Template-Mockups"
      />
      <PortfolioButton
        name="Live Demo"
        link="https://dangerok.github.io/Sematic-UI-React-Template-Mockups/"
      />
    </div>
    <p>
      As a Personal Project I created a Web-App using Semantic-UI-React and
      React.js to create a few faux websites and layouts.
    </p>
  </div>
);

export default SemanticUiReactLayouts;
