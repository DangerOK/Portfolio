import React from 'react';

class HtmlSkill extends React.Component {
  render() {
    return(
      <div className='skill'>
        <div className='logo-container'>
          <img src={this.props.img} alt='skill' />
        </div>
        <div className='skill-description'>
          <h3>Html</h3>
          <p>2016 - Present</p>
        </div>
      </div>
    )
  }

}

export default HtmlSkill;
