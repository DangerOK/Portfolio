import React from "react";
import "./About.css";

const About = props => {
  return (
    <div className="about-wrapper">
      <div className="landing-greeting">
        <br />
        <br />
        <br />
        <h1>
          Welcome to my site! I am a developer currently developing in{" "}
          <span>React.js</span>
        </h1>
      </div>
      <div className="arrow-down" onClick={props.onClick} />
    </div>
  );
};

export default About;
