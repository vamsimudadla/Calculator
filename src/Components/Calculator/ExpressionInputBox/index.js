import React, { Component } from "react";
import { Expression } from "./styledComponents";
class ExpressionInputBox extends Component {
  render() {
    const { expressionInput } = this.props;
    return <Expression>{expressionInput}</Expression>;
  }
}

export default ExpressionInputBox;
