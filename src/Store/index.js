import { observable, action } from "mobx";

class CalculatorStore {
  @observable expressionInput = "";

  @action.bound
  addCharToExpressionInput(char) {
    this.expressionInput = this.expressionInput + char;
  }
}

export default CalculatorStore;
