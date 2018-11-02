import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  render() {

    const { path } = this.props;
    const headerColor = path === '/Contact' ? {color: 'black'} : {color: 'white'};

    return(
        <header style={headerColor}>
          <NavLink to={'/'}><h3><a href='#top'>Adam Gawish</a></h3></NavLink>
          <nav>
            <ul>
              <li><NavLink to={'/'}><a href='#Portfolio'>Portfolio</a></NavLink></li>
              <li><NavLink to={'Contact'}>Contact</NavLink></li>
              <li>Blog</li>
            </ul>
          </nav>
        </header>
    )
  }
}



export default Header;

  // <NavLink to={'/'}><h3>Adam Gawish</h3></NavLink>
// <NavLink to={'Portfolio'}> </NavLink>
