import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CharacterButton from "./index";
describe("Button test cases", () => {
  it("should call parent funtion with event.target.value", () => {
    const addCharToExpressionInput = jest.fn();
    const { getByTestId } = render(
      <CharacterButton addCharToExpressionInput={addCharToExpressionInput} />
    );
    const button = getByTestId("vamsi");
    const event = {
      target: {
        value: "1"
      }
    };
    fireEvent.click(button, event);
    expect(addCharToExpressionInput).toHaveBeenCalledWith("1");
  });
});
