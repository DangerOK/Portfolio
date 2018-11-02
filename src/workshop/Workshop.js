import React from 'react';
import './Workshop.css';
import Sidebar from './sidebar/Sidebar';
import Prism from 'prismjs';
import FutureDoodle from './doodles/FutureDoodle';
import Doodle2 from './doodles/Doodle2';

class Workshop extends React.Component {

  componentDidMount() {
    Prism.highlightAll();
  }

  render() {
    return(
      <div className='workshop-wrapper'>
        <Sidebar />
        <FutureDoodle />
        <Doodle2 />
      </div>
    )
  }
}

export default Workshop;
