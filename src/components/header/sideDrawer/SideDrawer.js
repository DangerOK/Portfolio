import React from "react";
import { NavLink } from "react-router-dom";
import "./SideDrawer.css";
import DrawerToggleButton from "../drawerToggleButton/DrawerToggleButton";

const SideDrawer = props => {
  return (
    <div>
      <div
        className="backdrop"
        style={{ height: "100vh" }}
        onClick={props.drawerClickHandler}
      />
      <nav className="side-drawer">
        <DrawerToggleButton drawerClickHandler={props.drawerClickHandler} />
        <ul>
          <li>
            <NavLink to={"/Portfolio"}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to={"/Contact"}>Contact</NavLink>
          </li>
          <li>
            <NavLink to={"/Blog/About"}>Blog</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideDrawer;
