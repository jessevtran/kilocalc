import React, { useContext } from "react";
import { ButtonGroup, Button, Col } from "reactstrap";
import { kgToLbs, displayWeight } from "../logic/units";
import UnitContext from "../contexts/UnitContext";
import BarAndCollarContext from "../contexts/BarAndCollarContext";

const CollarWeightInput = () => {
  const { unit } = useContext(UnitContext);
  const { collarWeight, setCollarWeight } = useContext(BarAndCollarContext);

  const displayCollarWeight = unit === "kg" ? 2.5 : displayWeight(kgToLbs(2.5));

  return (
    <Col>
      <div>Clips or Collars</div>
      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => setCollarWeight(0)}
          active={collarWeight === 0}
        >
          <span>0{unit}</span>
        </Button>
        <Button
          color="primary"
          onClick={() => setCollarWeight(displayCollarWeight)}
          active={collarWeight > 0}
        >
          <span>{displayCollarWeight}</span>
          <span>{unit}</span>
        </Button>
      </ButtonGroup>
    </Col>
  );
};

export default CollarWeightInput;
