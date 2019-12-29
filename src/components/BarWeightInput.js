import React from "react";
import { Col, Input } from "reactstrap";

const BarWeightInput = ({ unit, barWeight, setBarWeight }) => {
  return (
    <Col>
      <h4>Bar Weight</h4>
      <Input
        step=".25"
        id="barWeightInput"
        type="number"
        onChange={e => setBarWeight(Number(e.target.value))}
        value={barWeight}
      />
    </Col>
  );
};

export default BarWeightInput;
