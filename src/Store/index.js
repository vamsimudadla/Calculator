import { observable, action, computed } from "mobx";

class CalculatorStore {
  @observable expressionInput = "";
  @observable isResultCalculated = false;
  isDotEntered = false;
  @action.bound
  addCharToExpressionInput(char) {
    if (this.isValidChar(char))
      this.expressionInput = this.expressionInput + char;
  }

  isValidChar(char) {
    const lastChar = this.lastChar();
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const chars = ["*", "-", "/", "%", "+"];
    if (numbers.includes(char)) {
      this.isResultCalculated = true;
      return true;
    } else if (this.expressionInput.length === 0) {
      if (chars.includes(char)) return false;
    } else if (char === lastChar) return false;
    else if (
      chars.includes(lastChar) &&
      (char === "+" || char === "*" || char === "/")
    )
      return false;
    else if (char === ".") {
      if (!this.isDotEntered) {
        this.isDotEntered = true;
        this.updateResultState();
        return true;
      }
      return false;
    } else {
      if (this.isResultCalculated) this.updateResultState();
      this.isDotEntered = false;
      return true;
    }
  }

  lastChar() {
    return this.expressionInput[this.expressionInput.length - 1];
  }

  @action.bound
  deleteCharFromExpressionInput() {
    if (this.expressionInput.length > 0) {
      this.updateResultState();
      this.expressionInput = this.expressionInput.slice(0, -1);
    }
  }

  @action.bound
  updateResultState() {
    this.isResultCalculated = !this.isResultCalculated;
  }

  @computed get result() {
    if (this.expressionInput.length > 0 && this.isResultCalculated)
      return eval(this.expressionInput);
  }

  @action.bound
  clearResult() {
    this.expressionInput = "";
  }

  @action.bound
  updateExpression() {
    const chars = ["*", "-", "/", "%", "+", "."];
    if (this.expressionInput.length > 0 && !chars.includes(this.lastChar())) {
      this.expressionInput = this.result;
      this.updateResultState();
    }
  }
}

export default CalculatorStore;
