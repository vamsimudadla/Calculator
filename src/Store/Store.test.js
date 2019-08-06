import CalculatorStore from "./index";
describe("Store Test Cases", () => {
  let calculatorStore;
  beforeEach(() => {
    calculatorStore = new CalculatorStore();
    expect(calculatorStore.expressionInput.length).toBe(0);
    calculatorStore.addCharToExpressionInput("6");
    calculatorStore.addCharToExpressionInput("/");
  });
  it("should add character to expression Input", () => {
    expect(calculatorStore.expressionInput.length).toBe(2);
  });

  it("should delete last character from expressionInput", () => {
    expect(calculatorStore.expressionInput.length).toBe(2);
    calculatorStore.deleteCharFromExpressionInput();
    expect(calculatorStore.expressionInput.length).toBe(1);
  });

  it("should calculate result from expressionInput", () => {
    expect(calculatorStore.expressionInput.length).toBe(2);
    calculatorStore.addCharToExpressionInput("2");
    expect(calculatorStore.result).toBe(3);
  });

  it("should clear expressionInput", () => {
    expect(calculatorStore.expressionInput.length).toBe(2);
    calculatorStore.addCharToExpressionInput("2");
    expect(calculatorStore.result).toBe(3);
    calculatorStore.clearResult();
    expect(calculatorStore.expressionInput.length).toBe(0);
  });
});
