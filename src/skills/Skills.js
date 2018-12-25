import React from 'react';
import './Skills.css';
import ReactSkill from './skill/ReactSkill';

const Skills = () => (
  <div className='skills-container'>
    <h2>Skills</h2>
    <div className='skill-container'>
      <ReactSkill img='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png'/>
      <ReactSkill img='https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/200px-Unofficial_JavaScript_logo_2.svg.png' />
    </div>
  </div>
)

export default Skills;
