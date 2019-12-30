import React, { useContext } from "react";
import { ButtonGroup, Button, Col } from "reactstrap";
import UnitContext from "../contexts/UnitContext";
import BarAndCollarContext from "../contexts/BarAndCollarContext";

const UnitInput = () => {
  const { unit, setUnit } = useContext(UnitContext);
  const { setBarWeight, setCollarWeight } = useContext(BarAndCollarContext);

  const updateUnit = unit => {
    setUnit(unit);
    const newBarWeight = unit === "kg" ? 20 : 45;
    setBarWeight(newBarWeight);
    const newCollarWeight = unit === "kg" ? 2.5 : 0;
    setCollarWeight(newCollarWeight);
  };

  return (
    <Col>
      <div>Unit</div>
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
