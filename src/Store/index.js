import { observable, action, computed } from "mobx";
import { numbers, chars } from "../Constants";
class CalculatorStore {
  @observable expressionInput = "";
  @observable isResultCalculated = false;
  @action.bound
  addCharToExpressionInput(char) {
    if (this.isValidChar(char)) {
      this.expressionInput = this.expressionInput + char;
      this.isResultCalculated = false;
    }
  }

  isValidChar(char) {
    const lastChar = this.lastChar();
    if (numbers.includes(char)) {
      return true;
    } else if (chars.includes(lastChar) && chars.includes(char)) {
      this.modifyLastChar(char);
      return false;
    } else {
      return true;
    }
  }

  @action.bound
  modifyLastChar(char) {
    this.expressionInput = this.expressionInput.slice(0, -1);
    this.expressionInput = this.expressionInput + char;
  }

  lastChar() {
    return this.expressionInput[this.expressionInput.length - 1];
  }

  @action.bound
  deleteCharFromExpressionInput() {
    if (this.expressionInput.length > 0) {
      this.expressionInput = this.expressionInput.slice(0, -1);
      this.isResultCalculated = false;
    }
  }

  result() {
    if (this.expressionInput.length > 0) {
      try {
        return eval(this.expressionInput);
      } catch (error) {
        return "invalid expression";
      }
    }
  }
  @action.bound
  clearResult() {
    this.expressionInput = "";
    this.isResultCalculated = false;
  }

  @action.bound
  updateResultState() {
    this.isResultCalculated = true;
  }
}

export default CalculatorStore;
