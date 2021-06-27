import React, { useContext } from "react";
import { Button, ButtonGroup, Container, Typography } from "@material-ui/core";
import RoundingContext from "../contexts/RoundingContext";

const RoundingInput = () => {
  const { rounding, setRounding } = useContext(RoundingContext);
  return (
    <Container>
      <Typography variant="subtitle1">Rounding</Typography>
      <ButtonGroup color="primary" aria-label="outlined button group">
        <Button
          onClick={() => setRounding("nearest")}
          active={rounding === "nearest"}
        >
          nearest
        </Button>
        <Button onClick={() => setRounding("up")} active={rounding === "up"}>
          up
        </Button>
        <Button
          onClick={() => setRounding("down")}
          active={rounding === "down"}
        >
          down
        </Button>
      </ButtonGroup>
    </Container>
  );
};

export default RoundingInput;
