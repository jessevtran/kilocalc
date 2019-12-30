import React, { useContext } from "react";
import { ButtonGroup, Button, Col } from "reactstrap";
import { kgToLbs, displayWeight } from "../logic/units";
import UnitContext from "../contexts/UnitContext";
import BarAndCollarContext from "../contexts/BarAndCollarContext";

const CollarWeightInput = () => {
  const { unit } = useContext(UnitContext);
  const { collarWeight, setCollarWeight } = useContext(BarAndCollarContext);

  return (
    <Col>
      <h4>Collars</h4>
      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => setCollarWeight(0)}
          active={collarWeight === 0}
        >
          {`0${unit}`}
        </Button>
        <Button
          color="primary"
          onClick={() => setCollarWeight(2.5)}
          active={collarWeight === 2.5}
        >
          {unit === "kg" ? "2.5kg" : `${displayWeight(kgToLbs(2.5))}lbs`}
        </Button>
      </ButtonGroup>
    </Col>
  );
};

export default CollarWeightInput;
