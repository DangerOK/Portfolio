import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import DrawerToggleButton from '../drawerToggleButton/DrawerToggleButton';


class Navbar extends React.Component {

  state = {
    style: {

    }
  }

  listenScrollEvent = e => {
    const transparentHeader = {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      transition: '.3s ease-in-out',
    }
    
    const scrolledHeader = {
      backgroundColor: '#fff',
      transition: '.3s ease-in-out',
      boxShadow: '0px 0px 10px 0px #aaa',
      height: '40px'
    }

    if (window.scrollY > 300) {
      this.setState({style: scrolledHeader})
    } else {
      this.setState({style: transparentHeader})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return(
      <header style={this.state.style}>
        <NavLink to={'/'}><h2>Adam Gawish</h2></NavLink>
        <nav>
          <ul className='desktop-nav'>
            <li><NavLink to={'/Portfolio'}>Portfolio</NavLink></li>
            <li><NavLink to={'/Contact'}>Contact</NavLink></li>
            <li><NavLink to={'/Blog/About'}>Blog</NavLink></li>
          </ul>
        </nav>
        <DrawerToggleButton drawerClickHandler={this.props.drawerClickHandler}/>
      </header>
    )
  }
}
export default Navbar;

//   <NavLink to={'/'}><h3>Adam Gawish</h3></NavLink>
// <NavLink to={'Portfolio'}> </NavLink>
// const blackHeader = {"backgrounColor" : 'black'}
// const clearHeader = {"backgroundColor" : 'transparent'}
// style={ (path !== '/' && path !== '/Portfolio') ? {"color" : '#2a2a2a'} :  {"backgroundColor" : 'transparent'} }
// let path = this.props.location.pathname;
// console.log(this.props.location)
