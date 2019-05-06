import React from "react";
import "./Landing.css";
import Portfolio from "./portfolio/Portfolio";
import About from "./about/About";
import Skills from "./skills/Skills";
import Links from "./links/Links";

const Landing = () => {
  return (
    <div className="landing-container">
      <About />
      <div className="content">
        <Links />
        <Skills />
        <Portfolio />
      </div>
    </div>
  );
};

export default Landing;
