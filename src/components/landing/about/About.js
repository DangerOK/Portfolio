import React from "react";
// import PropTypes from ' prop-types'
import "./About.css";
import Links from "../links/Links";

import lightbulb from "../../../assets/images/icons/lightbulb.svg";
import webcoding from "../../../assets/images/icons/webcoding.svg";
import startup from "../../../assets/images/icons/startup.svg";

const About = (props) => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>Hello World!</h1>
        <div className="break"></div>
        <Links />
      </div>

      <div className="about-icons">
        <div className="about-icon">
          <img src={lightbulb} alt="idea" />
        </div>
        <div className="about-icon">
          <img src={webcoding} alt="develop" />
        </div>
        <div className="about-icon">
          <img src={startup} alt="Take-off" />
        </div>
      </div>
    </div>
  );
};

export default About;
