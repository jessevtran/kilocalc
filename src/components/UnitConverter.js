import React, { useState } from "react";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { kgToLbs, lbsToKg, displayWeight } from "../logic/units";
import Barbell from "./Barbell";


const KgInput = () => {

  const [kg, setKg] = useState(0);
  const lbs = displayWeight(kgToLbs(kg));

  return (
    <FormGroup>
      <h2>Kilograms to Pounds </h2>
      <Label for="kgInput">Enter Kilograms</Label>
      <Input id="kgInput" type="number" value={kg} onChange={e => setKg(e.target.value)} />
      <div>
        <div>{lbs}Lbs</div>
        <Barbell weight={kg} unit="kg" />
      </div>
    </FormGroup>
  );
};

const LbsInput = () => {

  const [lbs, setLbs] = useState(0);

  return (
    <FormGroup>
      <h2>Pounds to Kilograms</h2>
      <Label for="lbsInput">Enter Pounds</Label>
      <Input id="lbsInput" type="number" value={lbs} onChange={e => setLbs(e.target.value)} />
      <div>
        <div>{displayWeight(lbsToKg(lbs))}Kg</div>
        <Barbell weight={lbs} unit="lbs" />
      </div>
    </FormGroup>
  );
};

const UnitConverter = () => {
  return <div>
    <h1>Unit Conversion</h1>
    <Form>
      <KgInput />
      <LbsInput />
    </Form>
  </div>;
};

export default UnitConverter;
