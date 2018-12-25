import React from 'react';
import './Footer.css';
import AdamG from '../images/AdamG.png'

const Footer = () => (
  <div className='footer-container'>
    <div className='footer-wrapper'>
      <div>
        <ul className='menu poop'>
          <h2>Menu</h2>
          <li>About</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </div>
      <div>
        <ul className='social-icons poop'>
          <li><a href='https://www.linkedin.com/in/adamgawish/' target="_blank" rel="noopener noreferrer"><img alt='Linkedin' src='https://cdn4.iconfinder.com/data/icons/miu-social/60/linkedin-social-media-48.png' /></a></li>
          <li><a href='https://github.com/DangerOK' target="_blank" rel="noopener noreferrer"><img alt='Github' src='https://cdn4.iconfinder.com/data/icons/miu-social/60/github-social-media-48.png' /></a></li>
          <li><a href='blank' target="_blank" rel="noopener noreferrer"><img alt='Facebook' src='https://cdn4.iconfinder.com/data/icons/miu-social/60/facebook-social-media-48.png' /></a></li>
          <li><a href='blank' target="_blank" rel="noopener noreferrer"><img alt='Email' src='https://cdn4.iconfinder.com/data/icons/miu-social/60/mail-social-media-48.png' /></a></li>
        </ul>
      </div>
      <div className='img-copyright'>
        <div className='footer-img'>
          <img src={AdamG} alt='site thumbnail' />
        </div>
      </div>
    </div>

  </div>
)

export default Footer;

// <div className='landing-background'>
//   <NavLink to={'About'}><h1>About</h1></NavLink>
//   <NavLink to={'Portfolio'}><h1>Portfolio</h1></NavLink>
//   <NavLink to={'Workshop'}><h1>Workshop</h1></NavLink>
// </div>

// <span>More Info - </span>
// <span>Copyright Adam Gawish 2018 ©</span>
