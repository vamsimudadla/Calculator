import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import Buttons from "./index";
import CalculatorStore from "../../../Store";
describe("Buttons test cases", () => {
  afterEach(cleanup);
  it("should call addCharToExpressionInput in store when event occurs", () => {
    const calculatorStore = new CalculatorStore();
    jest.spyOn(calculatorStore, "addCharToExpressionInput");
    const { getByText } = render(<Buttons calculatorStore={calculatorStore} />);
    const button = getByText("1");
    const event = {
      target: {
        value: "1"
      }
    };
    fireEvent.click(button, event);
    expect(calculatorStore.addCharToExpressionInput).toHaveBeenCalledWith("1");
  });
});
