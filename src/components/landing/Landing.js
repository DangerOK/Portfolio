import React from 'react'
// import PropTypes from 'prop-types'

import './Landing.css';
import About from './about/About';
import Skills from './skills/Skills';
import Portfolio from './portfolio/Portfolio';

const Landing = (props) => {
  return (
    <div>
      <About />
      <div>
        <div className='landing-container'>

          <Skills />
          <Portfolio />
        </div>
      </div>
    </div>
  )
}

export default Landing
