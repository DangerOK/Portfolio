import React from 'react';
import './DrawerToggleButton.css';

const DrawerToggleButton = (props) => (
  <button className='toggle-button' id='toggle-button' onClick={props.drawerClickHandler}>
    <div className='burger'></div>
    <div className='burger'></div>
    <div className='burger'></div>
  </button>
)

export default DrawerToggleButton;
