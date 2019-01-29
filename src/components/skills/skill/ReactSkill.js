import React from 'react';

class ReactSkill extends React.Component {
  render() {
    return(
      <div className='skill'>
        <div className='logo-container'>
          <img src={this.props.img} alt='skill' />
        </div>
        <div className='skill-description'>
          <h3>React</h3>
          <p>2018 - Present</p>
        </div>
      </div>
    )
  }

}

export default ReactSkill;

// style={{'backgroundColor' : this.props.color}}
