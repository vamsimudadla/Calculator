import React, { Component } from "react";
import CharacterButton from "./CharacterButton";
import { characters } from "../../../Constants";
import { Container } from "./styledComponents";
class Buttons extends Component {
  addCharToExpressionInput = char => {
    const { calculatorStore } = this.props;
    if (char === "Del") calculatorStore.deleteCharFromExpressionInput();
    else if (char === "c") calculatorStore.clearResult();
    else if (char === "=") calculatorStore.updateResultState();
    else calculatorStore.addCharToExpressionInput(char);
  };
  displayButtons = () => {
    return characters.map(character => (
      <CharacterButton
        addCharToExpressionInput={this.addCharToExpressionInput}
        character={character}
        key={Math.random()}
      />
    ));
  };
  render() {
    return <Container>{this.displayButtons()}</Container>;
  }
}

export default Buttons;
