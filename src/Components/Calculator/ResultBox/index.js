import React, { Component } from "react";
import { Text } from "./styledComponents";
class ResultBox extends Component {
  render() {
    const { result } = this.props;
    return <Text>{result}</Text>;
  }
}

export default ResultBox;
