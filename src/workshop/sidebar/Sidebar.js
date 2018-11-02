import React from 'react';
import './Sidebar.css';

class Sidebar extends React.Component {
  render() {
    return(
      <section className='sidebar'>
        <span>Buttons</span>
        <span>Animations</span>
        <span>Other</span>
        <span>Even More</span>
      </section>
    )
  }
}

export default Sidebar;
