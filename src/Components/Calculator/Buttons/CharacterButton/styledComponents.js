import styled, { css } from "styled-components";

export const Button = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  outline: none;
  margin: 5px;
  background-color: #171717;
  color: white;
  font-size: 18px;
  :hover {
    cursor: pointer;
  }
  ${props =>
    ["c", "%", "Del"].includes(props.char) &&
    css`
      background-color: #9e9e9e;
      color: black;
    `};

  ${props =>
    ["/", "*", "-", "+", "="].includes(props.char) &&
    css`
      background-color: #e48800;
      color: #fff;
    `};

  ${props =>
    [0].includes(props.char) &&
    css`
      width: 110px;
      height: 50px;
      border-radius: 25px;
    `};
`;
