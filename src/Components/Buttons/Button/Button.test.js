import React from "react";
import { render, fireEvent } from "@testing-library/react";

describe("Button test cases", () => {
  it("should call parent funtion with event.target.value", () => {
    const addCharToExpressionInput = jest.fn();
    const { getByText } = render(
      <Button addCharToExpressionInput={addCharToExpressionInput} />
    );
    const button = getByText("1");
    const event = {
      target: {
        value: "1"
      }
    };
    fireEvent.click(button, event);
    expect(addCharToExpressionInput).toHaveBeenCalledWith("1");
  });
});
