import React, { Component } from "react";

class CharacterButton extends Component {
  handleClick = e => {
    const { addCharToExpressionInput } = this.props;
    addCharToExpressionInput(e.target.value);
  };
  render() {
    return (
      <button value="1" onClick={this.handleClick}>
        1
      </button>
    );
  }
}

export default CharacterButton;
