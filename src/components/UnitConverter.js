import React, { Fragment, useState } from "react";
import { Form, FormGroup, ButtonGroup, Button, Input, Container, Row, Col } from "reactstrap";
import BarbellsView from "./BarbellsView";


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
        <BarbellsView
          weight={weight}
          barAndCollarWeight={barAndCollarWeight}
          unit={unit}
          rounding={rounding}
        />
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
