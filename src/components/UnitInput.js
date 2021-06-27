import React, { useContext } from "react";
import { Button, ButtonGroup, Container, Typography } from "@material-ui/core";
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
    <Container>
      <Typography variant="subtitle1">Unit</Typography>

      <ButtonGroup color="primary" aria-label="outlined button group">
        <Button onClick={() => updateUnit("kg")} active={unit === "kg"}>
          Kilos
        </Button>
        <Button onClick={() => updateUnit("lbs")} active={unit === "lbs"}>
          Pounds
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default UnitInput;
