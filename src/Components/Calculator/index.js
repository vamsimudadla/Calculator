import React, { Component } from "react";
import Buttons from "./Buttons";
import { calculatorStore } from "../../instances";
import ExpressionInputBox from "./ExpressionInputBox";
import ResultBox from "./ResultBox";
import { observer } from "mobx-react";
import { Container, Wrapper } from "./styledComponents";

@observer
class Calculator extends Component {
  render() {
    const { isResultCalculated, result, expressionInput } = calculatorStore;
    return (
      <Container>
        <Wrapper>
          <ExpressionInputBox expressionInput={expressionInput} />
          {isResultCalculated ? <ResultBox result={result} /> : ""}
          <Buttons calculatorStore={calculatorStore} />
        </Wrapper>
      </Container>
    );
  }
}

export default Calculator;
