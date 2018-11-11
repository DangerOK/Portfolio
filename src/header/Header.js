import React from 'react';
import './Header.css';
import { NavLink, withRouter } from 'react-router-dom';

class Header extends React.Component {

  render() {

    // const blackHeader = {"backgrounColor" : 'black'}
    // const clearHeader = {"backgroundColor" : 'transparent'}
    let path = this.props.location.pathname;
    console.log(this.props.location)
    return(
        <header style={ (path !== '/' && path !== '/Portfolio') ? {"color" : '#2a2a2a'} :  {"backgroundColor" : 'transparent'} }>
          <NavLink to={'/'}><h2>Adam Gawish</h2></NavLink>
          <nav>
            <ul>
              <li><NavLink to={'/Portfolio'}>Portfolio</NavLink></li>
              <li><NavLink to={'/Contact'}>Contact</NavLink></li>
              <li><NavLink to={'/Blog'}>Blog</NavLink></li>
            </ul>
          </nav>
        </header>
    )
  }
}

const Header2 = withRouter(Header)

export default Header2;

//   <NavLink to={'/'}><h3>Adam Gawish</h3></NavLink>
// <NavLink to={'Portfolio'}> </NavLink>
