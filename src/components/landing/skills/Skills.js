import React from "react";

import "./Skills.css";
// Skills ----------------------------------
import ReactSkill from "./skill/ReactSkill";
import JavascriptSkill from "./skill/JavascriptSkill";
import CssSkill from "./skill/CssSkill";
import ReactRouterSkill from "./skill/ReactRouterSkill";
import HtmlSkill from "./skill/HtmlSkill";
import SemanticUiSkill from "./skill/SemanticUiSkill";

// Logos -----------------------------------
import React_logo from "../../../assets/images/logos/React_logo.png";
import Javascript_logo from "../../../assets/images/logos/Javascript_logo.png";
import ReactRouter_logo from "../../../assets/images/logos/ReactRouter_logo.png";
import HTML5_logo from "../../../assets/images/logos/HTML5_logo.png";
import CSS_logo from "../../../assets/images/logos/CSS_logo.png";
import semantic_ui_logo from "../../../assets/images/logos/semantic_ui_logo.png";

//will refactor - map through skills and render mapped "Skill" component instead of hardcoded fooSkill

const Skills = () => (
  <div className="skills-container">
    <h2>Skills</h2>
    <div className="skill-container">
      <SemanticUiSkill img={semantic_ui_logo} />
      <ReactSkill img={React_logo} name="React" date="2018 - Present" />
      <ReactRouterSkill img={ReactRouter_logo} />
      <JavascriptSkill img={Javascript_logo} />
      <CssSkill img={CSS_logo} />
      <HtmlSkill img={HTML5_logo} />
    </div>
  </div>
);

export default Skills;
