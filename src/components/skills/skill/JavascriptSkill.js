import React from 'react';

class JavascriptSkill extends React.Component {
  render() {
    return(
      <div className='skill'>
        <div className='logo-container'>
          <img src={this.props.img} alt='skill' />
        </div>
        <div className='skill-description'>
          <h3>Javascript</h3>
          <p>2017 - Present</p>
        </div>
      </div>
    )
  }

}

export default JavascriptSkill;
