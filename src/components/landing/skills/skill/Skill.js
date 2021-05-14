import React from "react";

class Skill extends React.Component {
  render() {
    return (
      <div className="skill">
        <div className="logo-container">
          <img src={this.props.img} alt="skill" />
        </div>
        <div className="skill-description" style={{color:this.props.textcolor}}>
          <h3>{this.props.name}</h3>
        </div>
      </div>
    );
  }
}

export default Skill;

// style={{'backgroundColor' : this.props.color}}
