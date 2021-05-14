import React from "react";
import "./Navbar.css";
import { NavLink, HashRouter } from "react-router-dom";
import DrawerToggleButton from "../drawerToggleButton/DrawerToggleButton";

class Navbar extends React.Component {
  state = {
    style: {},
  };

  listenScrollEvent = (e) => {
    const transparentHeader = {
      backgroundColor: "transparent",
      boxShadow: "none",
      transition: ".5s ease-in-out",
    };

    const scrolledHeader = {
      backgroundColor: "#fff",
      transition: ".3s ease-in-out",
      boxShadow: "0px 0px 2px 0px lightgrey",
      // borderBottom:'2px solid purple',
      height: "55px",
      color: "#000",
    };

    if (window.scrollY > 60) {
      this.setState({ style: scrolledHeader });
    } else {
      this.setState({ style: transparentHeader });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <header style={this.state.style}>
        <HashRouter>
          <NavLink to={"/Portfolio"}>
            <h2>Adam Gawish</h2>
          </NavLink>
          <nav>
            <ul className="desktop-nav">
              <li>
                <NavLink to={"/Portfolio"}>Portfolio</NavLink>
              </li>
              <li>
                <NavLink to={"/Resume"}>Resume</NavLink>
              </li>
            </ul>
          </nav>
          <DrawerToggleButton
            drawerClickHandler={this.props.drawerClickHandler}
          />
        </HashRouter>
      </header>
    );
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
