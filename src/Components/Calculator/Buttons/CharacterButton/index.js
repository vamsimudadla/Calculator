import React, { Component } from "react";
import { Button } from "./styledComponents";
class CharacterButton extends Component {
  handleClick = e => {
    const { addCharToExpressionInput } = this.props;
    addCharToExpressionInput(e.target.value);
  };
  render() {
    const { character } = this.props;
    return (
      <Button
        value={character}
        onClick={this.handleClick}
        data-testid="vamsi"
        char={character}
      >
        {character}
      </Button>
    );
  }
}

export default CharacterButton;
