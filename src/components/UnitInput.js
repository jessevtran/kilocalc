import React, { useContext } from "react";
import { ButtonGroup, Button, Col } from "reactstrap";
import UnitContext from "../contexts/UnitContext";
import BarAndCollarContext from "../contexts/BarAndCollarContext";

const UnitInput = () => {
  const { unit, setUnit } = useContext(UnitContext);
  const { setCollarWeight, setBarWeight } = useContext(BarAndCollarContext);

  const updateUnit = unit => {
    setUnit(unit);
  };

  return (
    <Col>
      <div>Unit</div>
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
