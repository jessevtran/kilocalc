import React from "react";
import { ButtonGroup, Button, Col } from "reactstrap";

const UnitInput = ({ unit, setUnit, setBarWeight, setCollarWeight }) => {
  const updateUnit = unit => {
    setUnit(unit);
  };

  return (
    <Col>
      <h4>Unit</h4>
      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => {
            updateUnit("kg");
            // Default kilo loading to use collars
            setCollarWeight(2.5);
            setBarWeight(20);
          }}
          active={unit === "kg"}
        >
          kg
        </Button>
        <Button
          color="primary"
          onClick={() => {
            updateUnit("lbs");
            // When loading pounds, we rarely use collars, so default to 0
            setCollarWeight(0);
            setBarWeight(45);
          }}
          active={unit === "lbs"}
        >
          lbs
        </Button>
      </ButtonGroup>
    </Col>
  );
};

export default UnitInput;
