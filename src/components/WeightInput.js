import React, { useContext } from "react";
import UnitInput from "./UnitInput";
import styled from "styled-components";
import { Container, TextField, InputAdornment } from "@material-ui/core";
import TotalWeightContext from "../contexts/TotalWeightContext";
import UnitContext from "../contexts/UnitContext";
import WeightIncrementer from "./WeightIncrementer";

const Spacer = styled.div`
  margin-bottom: 2rem;
`;

const WeightInput = () => {
  const { totalWeight, setTotalWeight } = useContext(TotalWeightContext);
  const { unit } = useContext(UnitContext);
  return (
    <Container>
      <TextField
        label="Total Weight"
        id="total-weight-input"
        variant="outlined"
        InputProps={{
          endAdornment: <InputAdornment position="end">{unit}</InputAdornment>,
          inputProps: { inputMode: "numeric", type: "number", min: 0 }
        }}
        value={totalWeight ? totalWeight : ""}
        onChange={e => setTotalWeight(e.target.value)}
        // InputLabelProps={{ shrink: true }}
      />
      <WeightIncrementer />
      <UnitInput />
      <Spacer />
    </Container>
  );
};

export default WeightInput;