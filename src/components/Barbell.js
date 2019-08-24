import React, { useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
import { weightToBarLoad } from "../logic/barload";
import Plate from "./Plate";

const PlateContainer = styled.div`
  display: flex;
  align-items: center;

  height: 200px;
  width: 50%;
  margin: auto;

  // Default styling for the plate text.
  font-size: 12;
  font-weight: bold;
`;


const Barbell = ({ weight, unit }) => {

  const defaultBarAndCollarWeight = unit === "kg" ? 25 : 45;
  const [barAndCollarWeight, setBarAndCollarWeight] = useState(defaultBarAndCollarWeight);

  const plates = unit === "kg" ? [25, 20, 15, 10, 5, 2.5] : [45, 25, 10, 5, 2.5];
  const barLoad = weightToBarLoad(weight, plates, barAndCollarWeight);
  const renderBarLoad = () => {
    return barLoad.map((plate, i) => {
      return <Plate key={`${plate}${i}`} weight={plate} />
    });
  };
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="barAndCollar" >Bar And Collar Weight</Label>
          <Input id="barAndCollar" type="number" value={barAndCollarWeight} onChange={e => setBarAndCollarWeight(e.target.value)} />
        </FormGroup>
      </Form>
      <PlateContainer>
        {renderBarLoad()}
      </PlateContainer>
    </div>
  );
};

export default Barbell;

