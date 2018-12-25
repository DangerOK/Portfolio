import React from 'react';

class ReactSkill extends React.Component {
  render() {
    console.log(this.props);
    return(
      <div className='skill'>
        <img src={this.props.img} alt='React' />
        <h3>React</h3>
        <p>I know react n stuff</p>
      </div>
    )
  }

}

export default ReactSkill;

// style={{'backgroundColor' : this.props.color}}
