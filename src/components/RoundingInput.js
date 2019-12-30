import React, { Fragment, useContext } from "react";
import { ButtonGroup, Button } from "reactstrap";
import RoundingContext from "../contexts/RoundingContext";

const RoundingInput = () => {
  const { rounding, setRounding } = useContext(RoundingContext);
  return (
    <Fragment>
      <h4>Rounding</h4>
      <ButtonGroup>
        <Button
          color="primary"
          onClick={() => setRounding("nearest")}
          active={rounding === "nearest"}
        >
          nearest
        </Button>
        <Button
          color="primary"
          onClick={() => setRounding("up")}
          active={rounding === "up"}
        >
          up
        </Button>
        <Button
          color="primary"
          onClick={() => setRounding("down")}
          active={rounding === "down"}
        >
          down
        </Button>
      </ButtonGroup>
    </Fragment>
  );
};

export default RoundingInput;
