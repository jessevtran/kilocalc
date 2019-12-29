import React from "react";
import { FormGroup, Input, Row, Col } from "reactstrap";
import UnitInput from "./UnitInput";
import CollarWeightInput from "./CollarWeightInput";

const WeightInput = ({
  unit,
  setUnit,
  weight,
  setWeight,
  collarWeight,
  setBarWeight,
  setCollarWeight
}) => {
  return (
    <FormGroup>
      <Row>
        <Col>
          <h4>Total Weight ({unit})</h4>
          <Input
            step=".25"
            id="weightInput"
            type="number"
            onChange={e => setWeight(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        <Col xs="6">
          <UnitInput
            unit={unit}
            setUnit={setUnit}
            setBarWeight={setBarWeight}
            setCollarWeight={setCollarWeight}
          />
        </Col>
        <Col xs="6">
          <CollarWeightInput
            unit={unit}
            collarWeight={collarWeight}
            setCollarWeight={setCollarWeight}
          />
        </Col>
      </Row>
    </FormGroup>
  );
};

export default WeightInput;
