import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
import { kgToLbs, lbsToKg, displayWeight } from "../logic/units";
import Barbell from "./Barbell";


const KgInput = () => {

  const [kg, setKg] = useState(0);
  const lbs = displayWeight(kgToLbs(kg));

  return (
    <div>
      <FormGroup>
        <FormControl type="number" value={kg} onChange={e => setKg(e.target.value)} />
        <Form.Label>Kg = </Form.Label>
        <span>{lbs}Lbs</span>
        <div>
          <Barbell weight={kg} barAndCollarWeight={25} />
        </div>
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
        <div>
          <Barbell weight={lbs} barAndCollarWeight={45} />
        </div>
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
