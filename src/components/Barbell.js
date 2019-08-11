import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { weightToBarLoad } from "../logic/barload";

const Barbell = ({ weight, unit }) => {

  const defaultBarAndCollarWeight = unit === "kg" ? 25 : 45;
  const [barAndCollarWeight, setBarAndCollarWeight] = useState(defaultBarAndCollarWeight);

  const plates = unit === "kg" ? [25, 20, 15, 10, 5, 2.5] : [45, 25, 10, 5, 2.5];
  const barLoad = weightToBarLoad(weight, plates, barAndCollarWeight);
  const renderBarLoad = () => {
    return barLoad.map((plate, i) => {
      return <span key={`${plate}${i}`}>{plate},</span>
    });
  };
  return <div>
    <FormGroup>
      <Label>Bar And Collar Weight</Label>
      <Input type="number" value={barAndCollarWeight} onChange={e => setBarAndCollarWeight(e.target.value)} />
    </FormGroup>
    {renderBarLoad()}
  </div>
};

export default Barbell;

