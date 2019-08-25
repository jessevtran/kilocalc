import React from "react";
import { FormGroup, Input, Row, Col } from "reactstrap";

const WeightInput = ({
  unit,
  weight,
  setWeight,
  barAndCollarWeight,
  setBarAndCollarWeight
}) => {
  return (
    <FormGroup>
      <Row>
        <Col sm="6">
          <h4>Total Weight</h4>
          <Input
            step=".01"
            id="weightInput"
            type="number"
            onChange={e => setWeight(e.target.value)}
          />
        </Col>

        <Col sm="6">
          <h4>Bar And Collar Weight</h4>
          <Input
            step=".01"
            id="barAndCollar"
            type="number"
            value={barAndCollarWeight}
            onChange={e => setBarAndCollarWeight(e.target.value)}
          />
        </Col>
      </Row>
    </FormGroup>
  );
};

export default WeightInput;
