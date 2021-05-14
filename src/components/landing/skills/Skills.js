import React from "react";

import "./Skills.css";
// Skills ----------------------------------
import Skill from "./skill/Skill";
// import JavascriptSkill from "./skill/JavascriptSkill";
// import CssSkill from "./skill/CssSkill";
// import ReactRouterSkill from "./skill/ReactRouterSkill";
// import HtmlSkill from "./skill/HtmlSkill";
// import SemanticUiSkill from "./skill/SemanticUiSkill";

// Logos -----------------------------------
import React_logo from "../../../assets/images/logos/react_logo.png";
import Javascript_logo from "../../../assets/images/logos/Javascript_logo.png";
import ReactRouter_logo from "../../../assets/images/logos/ReactRouter_logo.png";
import HTML5_logo from "../../../assets/images/logos/HTML5_logo.png";
import CSS_logo from "../../../assets/images/logos/CSS_logo.png";
import semantic_ui_logo from "../../../assets/images/logos/semantic_ui_logo.png";
import plus_logo from "../../../assets/images/logos/plus_logo.svg";
import sass_logo from "../../../assets/images/logos/sass_logo.svg";
import bootstrap_logo from "../../../assets/images/logos/bootstrap_logo.svg";

//will refactor - map through skills and render mapped "Skill" component instead of hardcoded fooSkill

const Skills = () => (
  <div className="skills-container">
    <h2>Skills</h2>
    <div className="skill-container">
      <Skill img={semantic_ui_logo} name="Semantic-UI" textcolor="#35bdb2" />
      <Skill img={React_logo} name="React" textcolor="#00dcff" />
      <Skill img={ReactRouter_logo} name="React Router" textcolor="#000000" />
      <Skill img={Javascript_logo} name="JavaScript" textcolor="#f7e600" />
      <Skill img={CSS_logo} name="CSS" textcolor="#1f62ae" />
      <Skill img={HTML5_logo} name="HTML" textcolor="#e44d26" />
      <Skill img={bootstrap_logo} name="Bootstrap" textcolor="#563d7c" />
      <Skill img={sass_logo} name="Sass" textcolor="#cf649a" />
      <Skill img={plus_logo} name="Plus More" textcolor="" />
    </div>
  </div>
);

export default Skills;
