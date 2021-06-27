import React, { useContext } from "react";
import BarAndCollarContext from "../contexts/BarAndCollarContext";
import UnitContext from "../contexts/UnitContext";
import { Container, TextField, InputAdornment } from "@material-ui/core";

const BarWeightInput = () => {
  const { unit } = useContext(UnitContext);
  const { setBarWeight } = useContext(BarAndCollarContext);
  return (
    <Container>
      <TextField
        label={`Bar Weight`}
        id="bar-weight-input"
        variant="outlined"
        size="small"
        type="number"
        InputProps={{
          endAdornment: <InputAdornment position="end">{unit}</InputAdornment>
        }}
        onChange={e => setBarWeight(Number(e.target.value))}
      />
    </Container>
  );
};

export default BarWeightInput;
