import { observable, action } from "mobx";

class CalculatorStore {
  @observable expressionInput = "";

  @action.bound
  addCharToExpressionInput(char) {
    if (this.isValidChar(char))
      this.expressionInput = this.expressionInput + char;
  }

  isValidChar(char) {
    const lastChar = this.expressionInput[this.expressionInput.length - 1];
    if (char === lastChar) return false;
    return true;
  }
}

export default CalculatorStore;
