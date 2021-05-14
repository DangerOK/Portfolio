import React from 'react';
import Navbar from './navbar/Navbar';
import SideDrawer from './sideDrawer/SideDrawer';

class Header extends React.Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    console.log(this.state);
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
   });
 };

  render() {
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer drawerClickHandler={this.drawerToggleClickHandler} />
    }

    return (
      <div>
        <Navbar drawerClickHandler={this.drawerToggleClickHandler}/>
        {sideDrawer}
      </div>
    )
  }
}

export default Header
