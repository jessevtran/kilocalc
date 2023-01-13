import React, { useContext } from "react";
import { Button, ButtonGroup, Container, Typography } from "@material-ui/core";
import TotalWeightContext from "../contexts/TotalWeightContext";

const WeightIncrementer = () => {
  const { totalWeight, setTotalWeight } = useContext(TotalWeightContext);

  const changeValue = operation => {
    let input = document.getElementById("total-weight-input");
    let newWeight;

    if (input.value === "") {
      // error checking for blank input value
      input.value = 0;
      newWeight = 0;
    } else {
      newWeight = parseFloat(totalWeight);
    }
    console.log(newWeight);

    if (operation === "add") {
      newWeight = newWeight + 2.5;
    } else if (operation === "sub" && newWeight > 0) {
      newWeight = newWeight - 2.5;
    }
    setTotalWeight(newWeight);

    if (newWeight === 0) {
      input.value = "";
    } else {
      input.value = newWeight;
    }
  };

  return (
    <Container>
      <Typography variant="subtitle1"> Increment </Typography>
      <ButtonGroup color="primary" aria-label="outlined button group">
        <Button onClick={() => changeValue("sub")}>- 2.5</Button>
        <Button onClick={() => changeValue("add")}>+ 2.5</Button>
      </ButtonGroup>
    </Container>
  );
};

export default WeightIncrementer;