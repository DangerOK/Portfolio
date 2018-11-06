import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {

    return(
        <header >
          <NavLink to={'/'}><h2>Adam Gawish</h2></NavLink>
          <nav>
            <ul>
              <li><NavLink to={'/'}>Portfolio</NavLink></li>
              <li><NavLink to={'Contact'}>Contact</NavLink></li>
              <li>Blog</li>
            </ul>
          </nav>
        </header>
    )
  }
}

export default Header;

//   <NavLink to={'/'}><h3>Adam Gawish</h3></NavLink>
// <NavLink to={'Portfolio'}> </NavLink>
