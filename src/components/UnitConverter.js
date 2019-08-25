import React, { Fragment, useState } from "react";
import { Form, FormGroup, ButtonGroup, Button, Input, Container, Row, Col } from "reactstrap";
import { kgToLbs, lbsToKg, displayWeight } from "../logic/units";
import Barbell from "./Barbell";
import { weightToBarLoad } from "../logic/barload";


const WeightInput = () => {

  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState("kg");
  const [rounding, setRounding] = useState("nearest");

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
      let roundingFn;
      if (rounding === "up") {
        roundingFn = Math.ceil;
      } else if (rounding === "down") {
        roundingFn = Math.floor;
      } else {
        roundingFn = Math.round;
      }
      return roundingFn(weight/roundTo) * roundTo;
    };

    const barLoad = weightToBarLoad(weight, getPlates(unit), barAndCollarWeight);

    const convert = unit === "kg" ? kgToLbs : lbsToKg;
    const otherUnit = unit === "kg" ? "lbs" : "kg";
    const otherWeight = convert(plateRound(weight), otherUnit);
    const otherBarLoad = weightToBarLoad(plateRound(otherWeight, otherUnit), getPlates(otherUnit), displayWeight(plateRound(convert(barAndCollarWeight)), otherUnit));
    return (
      <Container>
        <Row>
          <Col sm="6">
            <h2>{weight}{unit}</h2>
            <Barbell barLoad={barLoad} weight={weight} unit={unit} platesAvailable={getPlates(unit)}/>
          </Col>
          <Col sm="6">
            <h2>{displayWeight(convert(weight))}{otherUnit}</h2>
            <h2>Rounded ({rounding}): {plateRound(otherWeight, otherUnit)}{otherUnit}</h2>
            <Barbell barLoad={otherBarLoad} weight={otherWeight} unit={otherUnit} platesAvailable={getPlates(otherUnit)}/>
          </Col>
        </Row>
      </Container>
    );
  };

  return (
    <Fragment>
      <FormGroup>
        <Container>
          <h4>Total Weight</h4>
          <Input step=".01" id="weightInput" type="number" onChange={e => setWeight(e.target.value)} />

          <h4>Bar And Collar Weight</h4>
          <Input step=".01" id="barAndCollar" type="number" value={barAndCollarWeight} onChange={e => setBarAndCollarWeight(e.target.value)} />


          <Row>
            <Col>
              <h4>Unit</h4>
              <ButtonGroup>
                <Button color="primary" onClick={() => updateUnit("kg")} active={unit === "kg"}>kg</Button>
                <Button color="primary" onClick={() => updateUnit("lbs")} active={unit === "lbs"}>lbs</Button>
              </ButtonGroup>
            </Col>

            <Col>
              <h4>Rounding</h4>
              <ButtonGroup>
                <Button color="primary" onClick={() => setRounding("nearest")} active={rounding === "nearest"}>nearest</Button>
                <Button color="primary" onClick={() => setRounding("up")} active={rounding === "up"}>up</Button>
                <Button color="primary" onClick={() => setRounding("down")} active={rounding === "down"}>down</Button>
              </ButtonGroup>
            </Col>
          </Row>
        </Container>
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
