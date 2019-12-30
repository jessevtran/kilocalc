import React, { useContext } from "react";
import { Input } from "reactstrap";
import BarAndCollarContext from "../contexts/BarAndCollarContext";
import UnitContext from "../contexts/UnitContext";

const BarWeightInput = () => {
  const { unit } = useContext(UnitContext);
  const { setBarWeight } = useContext(BarAndCollarContext);
  return (
    <div>
      <div>Specify Bar Weight ({unit})</div>
      <Input
        step=".25"
        id="barWeightInput"
        type="number"
        onChange={e => setBarWeight(Number(e.target.value))}
      />
    </div>
  );
};

export default BarWeightInput;
