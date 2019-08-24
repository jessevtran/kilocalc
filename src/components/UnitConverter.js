import React, { Fragment, useState } from "react";
import { Form, FormGroup, ButtonGroup, Button, Label, Input } from "reactstrap";
import { kgToLbs, lbsToKg, displayWeight } from "../logic/units";
import Barbell from "./Barbell";
import { weightToBarLoad } from "../logic/barload";


const WeightInput = () => {

  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState("kg");

  const defaultBarAndCollarWeight = unit => {
    return unit === "kg" ? 25 : 45;
  };

  const [barAndCollarWeight, setBarAndCollarWeight] = useState(defaultBarAndCollarWeight(unit));

  const plates = unit === "kg" ? [25, 20, 15, 10, 5, 2.5] : [45, 25, 10, 5, 2.5];
  const barLoad = weightToBarLoad(weight, plates, barAndCollarWeight);

  const updateUnit = unit => {
    setUnit(unit);
    setBarAndCollarWeight(defaultBarAndCollarWeight(unit));
  };

  return (
    <Fragment>
      <FormGroup>
        <Label for="weightInput">Weight</Label>
        <Input id="weightInput" type="number" onChange={e => setWeight(e.target.value)} />
        <Label for="unitInput">Unit</Label>
      </FormGroup>

      <ButtonGroup>
        <Button color="primary" onClick={() => updateUnit("kg")} active={unit === "kg"}>kg</Button>
        <Button color="primary" onClick={() => updateUnit("lbs")} active={unit === "lbs"}>lbs</Button>
      </ButtonGroup>

      <FormGroup>
        <Label for="barAndCollar" >Bar And Collar Weight</Label>
        <Input id="barAndCollar" type="number" value={barAndCollarWeight} onChange={e => setBarAndCollarWeight(e.target.value)} />
      </FormGroup>

      <div>
        <Barbell barLoad={barLoad} weight={weight} unit={unit} />
      </div>
    </Fragment>
  );
};

const UnitConverter = () => {
  return (
    <Form>
      <WeightInput />
    </Form>
  );
};

export default UnitConverter;
