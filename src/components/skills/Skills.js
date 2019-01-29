import React from 'react';

import './Skills.css';
// Skills ----------------------------------
import ReactSkill from './skill/ReactSkill';
import JavascriptSkill from './skill/JavascriptSkill';
import CssSkill from './skill/CssSkill';
import ReactRouterSkill from './skill/ReactRouterSkill';
import HtmlSkill from './skill/HtmlSkill';

// Logos -----------------------------------
import React_logo from '../images/logos/React_logo.png';
import Javascript_logo from '../images/logos/Javascript_logo.png';
import ReactRouter_logo from '../images/logos/ReactRouter_logo.png';
import HTML5_logo from '../images/logos/HTML5_logo.png';
import CSS_logo from '../images/logos/CSS_logo.png';





const Skills = () => (
  <div className='skills-container'>
    <h2>Skills</h2>
    <div className='skill-container'>
      <ReactSkill img={React_logo}/>
      <ReactRouterSkill img={ReactRouter_logo} />
      <JavascriptSkill img={Javascript_logo} />
      <CssSkill img={CSS_logo} />
      <HtmlSkill img={HTML5_logo}/>
    </div>
  </div>
)

export default Skills;
