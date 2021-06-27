import React, { useContext } from "react";
import { Button, ButtonGroup, Container, Typography } from "@material-ui/core";
import { kgToLbs, displayWeight } from "../logic/units";
import UnitContext from "../contexts/UnitContext";
import BarAndCollarContext from "../contexts/BarAndCollarContext";

const CollarWeightInput = () => {
  const { unit } = useContext(UnitContext);
  const { collarWeight, setCollarWeight } = useContext(BarAndCollarContext);

  const displayCollarWeight = unit === "kg" ? 2.5 : displayWeight(kgToLbs(2.5));

  return (
    <Container>
      <Typography variant="subtitle1">Collar weight</Typography>
      <ButtonGroup color="primary" aria-label="outlined button group">
        <Button onClick={() => setCollarWeight(0)} active={collarWeight === 0}>
          <span>0{unit}</span>
        </Button>
        <Button
          onClick={() => setCollarWeight(displayCollarWeight)}
          active={collarWeight > 0}
        >
          <span>{displayCollarWeight}</span>
          <span>{unit}</span>
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default CollarWeightInput;
