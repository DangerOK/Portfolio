import React from 'react';
import './Landing.css'
import Portfolio from '../portfolio/Portfolio';
import About from '../about/About';
import Skills from '../skills/Skills';
// import Idkyet from '../idkyet/Idkyet';


const Landing = () => (
  <div className='landing-container'>
    <About />
    <div className='content'>
      <Skills />
      <Portfolio />
    </div>
  </div>
)

export default Landing;
