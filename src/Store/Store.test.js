describe("Store Test Cases", () => {
  it("should add character to expression Input", () => {
    const calculatorStore = new CalculatorStore();
    expect(calculatorStore.expressionInput.length).toBe(0);
    calculatorStore.addCharToExpressionInput(7);
    calculatorStore.addCharToExpressionInput("/");
    expect(calculatorStore.expressionInput.length).toBe(2);
  });
});
