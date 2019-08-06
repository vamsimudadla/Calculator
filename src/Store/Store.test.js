import CalculatorStore from "./index";
describe("Store Test Cases", () => {
  let calculatorStore;
  beforeEach(() => {
    calculatorStore = new CalculatorStore();
    expect(calculatorStore.expressionInput.length).toBe(0);
    calculatorStore.addCharToExpressionInput(7);
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
});
