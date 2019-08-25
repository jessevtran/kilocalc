import React, { Fragment, useState } from "react";
import { Form, FormGroup, ButtonGroup, Button, Input, Container, Row, Col, Card, CardBody } from "reactstrap";
import BarbellsView from "./BarbellsView";

const Inputs = ({ weight, setWeight, unit, setUnit, rounding, setRounding, barAndCollarWeight, setBarAndCollarWeight, defaultBarAndCollarWeight }) => {

  return (
    <Form>
      <WeightInput
        unit={unit}
        setUnit={setUnit}
        rounding={rounding}
        setRounding={setRounding}
        weight={weight}
        setWeight={setWeight}
        barAndCollarWeight={barAndCollarWeight}
        setBarAndCollarWeight={setBarAndCollarWeight}
      />
      <Row>
        <Col>
          <UnitInput
            unit={unit}
            setUnit={setUnit}
            setBarAndCollarWeight={setBarAndCollarWeight}
            defaultBarAndCollarWeight={defaultBarAndCollarWeight}
          />
        </Col>
        <Col>
          <RoundingInput
            rounding={rounding}
            setRounding={setRounding}
          />
        </Col>
      </Row>
    </Form>
  );
};

const RoundingInput = ({ rounding, setRounding }) => {

  return (
    <Fragment>
      <h4>Rounding</h4>
      <ButtonGroup>
        <Button color="primary" onClick={() => setRounding("nearest")} active={rounding === "nearest"}>nearest</Button>
        <Button color="primary" onClick={() => setRounding("up")} active={rounding === "up"}>up</Button>
        <Button color="primary" onClick={() => setRounding("down")} active={rounding === "down"}>down</Button>
      </ButtonGroup>
    </Fragment>
  );
};

const UnitInput = ({ unit, setUnit, setBarAndCollarWeight, defaultBarAndCollarWeight }) => {

  const updateUnit = unit => {
    setUnit(unit);
    setBarAndCollarWeight(defaultBarAndCollarWeight(unit));
  };

  return (
    <Col>
      <h4>Unit</h4>
      <ButtonGroup>
        <Button color="primary" onClick={() => updateUnit("kg")} active={unit === "kg"}>kg</Button>
        <Button color="primary" onClick={() => updateUnit("lbs")} active={unit === "lbs"}>lbs</Button>
      </ButtonGroup>
    </Col>
  );
};
const WeightInput = ({ unit, weight, setWeight, barAndCollarWeight, setBarAndCollarWeight }) => {


  return (
    <FormGroup>
      <Container>
        <h4>Total Weight</h4>
        <Input step=".01" id="weightInput" type="number" onChange={e => setWeight(e.target.value)} />

        <h4>Bar And Collar Weight</h4>
        <Input step=".01" id="barAndCollar" type="number" value={barAndCollarWeight} onChange={e => setBarAndCollarWeight(e.target.value)} />
      </Container>
    </FormGroup>
  );
};

const UnitConverter = () => {
  const defaultBarAndCollarWeight = unit => {
    return unit === "kg" ? 25 : 45;
  };

  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState("kg");
  const [rounding, setRounding] = useState("nearest");
  const [barAndCollarWeight, setBarAndCollarWeight] = useState(defaultBarAndCollarWeight(unit));

  return (
    <Fragment>
      <Card>
        <CardBody>
        <Inputs 
          weight={weight}
          setWeight={setWeight}
          unit={unit}
          setUnit={setUnit}
          rounding={rounding}
          setRounding={setRounding}
          barAndCollarWeight={barAndCollarWeight}
          setBarAndCollarWeight={setBarAndCollarWeight}
          defaultBarAndCollarWeight={defaultBarAndCollarWeight}
        />
      </CardBody>
      </Card>
      <Card>
        <CardBody>
        <BarbellsView
          weight={weight}
          barAndCollarWeight={barAndCollarWeight}
          unit={unit}
          rounding={rounding}
        />
      </CardBody>
      </Card>
    </Fragment>
  );
};

export default UnitConverter;
