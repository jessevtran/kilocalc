import React from "react";
import { ButtonGroup, Button, Col } from "reactstrap";

const UnitInput = ({
  unit,
  setUnit,
  setBarAndCollarWeight,
  defaultBarAndCollarWeight
}) => {
  const updateUnit = unit => {
    setUnit(unit);
    setBarAndCollarWeight(defaultBarAndCollarWeight(unit));
  };

  return (
    <Col>
      <h4>Unit</h4>
      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => updateUnit("kg")}
          active={unit === "kg"}
        >
          kg
        </Button>
        <Button
          color="primary"
          onClick={() => updateUnit("lbs")}
          active={unit === "lbs"}
        >
          lbs
        </Button>
      </ButtonGroup>
    </Col>
  );
};

export default UnitInput;
