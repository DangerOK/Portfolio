import React from 'react';
import './Footer.css';
// import {NavLink} from 'react-router-dom';

const Footer = () => (
  <div className='footer-wrapper' id='Contact'>
    <ul className='social-icons'>
      <li><a href='_blank'><img alt='Linkedin' src='https://cdn4.iconfinder.com/data/icons/miu-social/60/linkedin-social-media-48.png' /></a></li>
      <li><a href='_blank'><img alt='Github' src='https://cdn4.iconfinder.com/data/icons/miu-social/60/github-social-media-48.png' /></a></li>
      <li><a href='_blank'><img alt='Facebook' src='https://cdn4.iconfinder.com/data/icons/miu-social/60/facebook-social-media-48.png' /></a></li>
      <li><a href='_blank'><img alt='Email' src='https://cdn4.iconfinder.com/data/icons/miu-social/60/mail-social-media-48.png' /></a></li>
    </ul>
  </div>
)

export default Footer;
 
// <div className='landing-background'>
//   <NavLink to={'About'}><h1>About</h1></NavLink>
//   <NavLink to={'Portfolio'}><h1>Portfolio</h1></NavLink>
//   <NavLink to={'Workshop'}><h1>Workshop</h1></NavLink>
// </div>
