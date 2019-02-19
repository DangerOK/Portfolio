import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import AdamG from '../images/AdamG.png';
import linkedin_icon from '../images/icons/linkedin_icon.png';
import github_icon from '../images/icons/github_icon.png';
import facebook_icon from '../images/icons/facebook_icon.png';
import mail_icon from '../images/icons/mail_icon.png';
import Adam_Gawish_Resume_2019  from '../images/Adam_Gawish_Resume_2019.pdf';


const Footer = () => (
  <div className='footer-container'>
    <div className='footer-wrapper'>
      <div className='menu-wrapper'>
        <ul className='menu'>
          <p>Menu</p>
          <li><NavLink to={'/Blog/About'}>About</NavLink></li>
          <li><NavLink to={'/Contact'}>Contact</NavLink></li>
          <li>
            <a href={Adam_Gawish_Resume_2019} target='_blank' rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </div>
        <ul className='social-icons'>
          <li><a href='https://www.linkedin.com/in/adamgawish/' target="_blank" rel="noopener noreferrer"><img alt='Linkedin' src={linkedin_icon} /></a></li>
          <li><a href='https://github.com/DangerOK' target="_blank" rel="noopener noreferrer"><img alt='Github' src={github_icon} /></a></li>
          <li><a href='blank' target="_blank" rel="noopener noreferrer"><img alt='Facebook' src={facebook_icon} /></a></li>
          <li><NavLink to={'/Contact'}><img alt='Email' src={mail_icon} /></NavLink></li>
        </ul>
          <div className='footer-img'>
            <div className='img-wrapper'>
              <img src={AdamG} alt='site thumbnail' />
            </div>
          </div>
    </div>
  </div>
)

export default Footer;

// <span>More Info - </span>
// <span>Copyright Adam Gawish 2018 ©</span>
// https://www.iconfinder.com/iconsets/miu-social
// mailto:gawishadam@gmail.com
