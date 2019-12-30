import React, { useContext } from "react";
import { ButtonGroup, Button } from "reactstrap";
import RoundingContext from "../contexts/RoundingContext";
import styled from "styled-components";

const Label = styled.span`
  margin-right: 1rem;
`;

const RoundingInput = () => {
  const { rounding, setRounding } = useContext(RoundingContext);
  return (
    <div>
      <Label>Rounding</Label>
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
    </div>
  );
};

export default RoundingInput;
