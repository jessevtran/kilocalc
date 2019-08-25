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

  const updateUnit = unit => {
    setUnit(unit);
    setBarAndCollarWeight(defaultBarAndCollarWeight(unit));
  };

  const renderBarbells = () => {
    if (weight === 0) {
      return null;
    }

    const getPlates = unit => {
      return unit === "kg" ? [25, 20, 15, 10, 5, 2.5, 1.25] : [45, 25, 10, 5, 2.5];
    };

    const getSmallestPlate = unit => {
      const plates = getPlates(unit);
      return plates[plates.length - 1];
    };

    const plateRound = (weight, unit) => {
      const roundTo = getSmallestPlate(unit) * 2;
      return Math.ceil(weight/roundTo) * roundTo;
    };

    const barLoad = weightToBarLoad(weight, getPlates(unit), barAndCollarWeight);

    const convert = unit === "kg" ? kgToLbs : lbsToKg;
    const otherUnit = unit === "kg" ? "lbs" : "kg";
    const otherWeight = convert(plateRound(weight), otherUnit);
    const otherBarLoad = weightToBarLoad(plateRound(otherWeight, otherUnit), getPlates(otherUnit), displayWeight(plateRound(convert(barAndCollarWeight)), otherUnit));
    return (
      <Fragment>
        <h2>{weight}{unit}</h2>
        <Barbell barLoad={barLoad} weight={weight} unit={unit} />
        <h2>Actual: {displayWeight(convert(weight))}{otherUnit}</h2>
        <h2>Rounded: {plateRound(otherWeight, otherUnit)}{otherUnit}</h2>
        <Barbell barLoad={otherBarLoad} weight={otherWeight} unit={otherUnit} />
      </Fragment>
    );
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
        {renderBarbells()}
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
