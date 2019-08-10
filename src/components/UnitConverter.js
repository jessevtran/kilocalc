import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import { kgToLbs, lbsToKg, displayWeight } from "../logic/units";


const KgInput = () => {

  const [kg, setKg] = useState(0);

  return (
    <div>
      <FormGroup>
        <FormControl type="number" value={kg} onChange={e => setKg(e.target.value)} />
        <Form.Label>Kg = </Form.Label>
        <span>{displayWeight(kgToLbs(kg))}Lbs</span>
      </FormGroup>

    </div>
  );
};

const LbsInput = () => {

  const [lbs, setLbs] = useState(0);

  return (
    <div>
      <FormGroup>
        <FormControl type="number" value={lbs} onChange={e => setLbs(e.target.value)} />
        <Form.Label>Lbs = </Form.Label>
        <span>{displayWeight(lbsToKg(lbs))}Kg</span>
      </FormGroup>

    </div>
  );
};

const UnitConverter = () => {
  return <div>
    <div>Unit Conversion</div>
    <KgInput />
    <LbsInput />
  </div>;
};

export default UnitConverter;
