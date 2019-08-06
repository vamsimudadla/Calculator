import { observable, action, computed } from "mobx";

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

  @action.bound
  deleteCharFromExpressionInput() {
    if (this.expressionInput.length > 0) {
      this.expressionInput = this.expressionInput.slice(0, -1);
    }
  }

  @computed get result() {
    if (this.expressionInput.length > 0) return eval(this.expressionInput);
  }
}

export default CalculatorStore;
