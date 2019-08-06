import CalculatorStore from "./index";
describe("Store Test Cases", () => {
  it("should add character to expression Input", () => {
    const calculatorStore = new CalculatorStore();
    expect(calculatorStore.expressionInput.length).toBe(0);
    calculatorStore.addCharToExpressionInput(7);
    calculatorStore.addCharToExpressionInput("/");
    expect(calculatorStore.expressionInput.length).toBe(2);
  });

  it("should delete last character from expressionInput", () => {
    const calculatorStore = new CalculatorStore();
    expect(calculatorStore.expressionInput.length).toBe(0);
    calculatorStore.addCharToExpressionInput(7);
    calculatorStore.addCharToExpressionInput("/");
    expect(calculatorStore.expressionInput.length).toBe(2);
    calculatorStore.deleteCharFromExpressionInput();
    expect(calculatorStore.expressionInput.length).toBe(1);
  });
});
