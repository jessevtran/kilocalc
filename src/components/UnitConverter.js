import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import { kgToLbs, lbsToKg } from "../logic/units";


const KgInput = () => {

  const [kg, setKg] = useState(0);

  return (
    <div>
      <FormGroup>
        <Form.Label>Kg to Lbs</Form.Label>
        <FormControl type="number" value={kg} onChange={e => setKg(e.target.value)} />
      </FormGroup>

      <div>Lbs</div>
      <div>{kgToLbs(kg)}</div>
    </div>
  );
};

const LbsInput = () => {

  const [lbs, setLbs] = useState(0);

  return (
    <div>
      <FormGroup>
        <Form.Label>Lbs to Kg</Form.Label>
        <FormControl type="number" value={lbs} onChange={e => setLbs(e.target.value)} />
      </FormGroup>

      <div>Kg</div>
      <div>{lbsToKg(lbs)}</div>
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
