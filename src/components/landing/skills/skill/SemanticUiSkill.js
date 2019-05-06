import React from "react";

class SemanticUiSkill extends React.Component {
  render() {
    return (
      <div className="skill">
        <div className="logo-container">
          <img src={this.props.img} alt="skill" />
        </div>
        <div className="skill-description">
          <h3>Semantic-Ui-React</h3>
          <p>2019 - Present</p>
        </div>
      </div>
    );
  }
}

export default SemanticUiSkill;
