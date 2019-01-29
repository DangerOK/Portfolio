import React from 'react';
import Portfolio from '../../images/Portfolio.png';

const PortfolioPage = () => (
  <div className='project'>
    <h2>Portfolio Page</h2>
    <img src={Portfolio} alt='site thumbnail' />
    <p>This site you're on right now was all made from scratch using ReactJS, React-Router, and my own Custom CSS. </p>
  </div>
)

export default PortfolioPage;
