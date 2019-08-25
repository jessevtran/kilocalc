import React, { Fragment, useState } from "react";
import { Form, Row, Col, Card, CardBody } from "reactstrap";
import BarbellsView from "./BarbellsView";
import WeightInput from "./WeightInput";
import UnitInput from "./UnitInput";
import RoundingInput from "./RoundingInput";
import AvailablePlatesInput from "./AvailablePlatesInput";

const Inputs = ({
  weight,
  setWeight,
  unit,
  setUnit,
  rounding,
  setRounding,
  barAndCollarWeight,
  setBarAndCollarWeight,
  defaultBarAndCollarWeight,
  availablePlatesKg,
  setAvailablePlatesKg,
  availablePlatesLbs,
  setAvailablePlatesLbs
}) => {
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
          <RoundingInput rounding={rounding} setRounding={setRounding} />
        </Col>
      </Row>
      <AvailablePlatesInput
        availablePlatesKg={availablePlatesKg}
        setAvailablePlatesKg={setAvailablePlatesKg}
        availablePlatesLbs={availablePlatesLbs}
        setAvailablePlatesLbs={setAvailablePlatesLbs}
      />
    </Form>
  );
};

const UnitConverter = () => {
  const defaultBarAndCollarWeight = unit => {
    return unit === "kg" ? 25 : 45;
  };

  const defaultPlates = unit => {
    return unit === "kg"
      ? [25, 20, 15, 10, 5, 2.5, 1.25]
      : [45, 25, 10, 5, 2.5];
  };

  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState("kg");
  const [rounding, setRounding] = useState("nearest");
  const [barAndCollarWeight, setBarAndCollarWeight] = useState(
    defaultBarAndCollarWeight(unit)
  );

  const [availablePlatesKg, setAvailablePlatesKg] = useState(
    defaultPlates("kg")
  );
  const [availablePlatesLbs, setAvailablePlatesLbs] = useState(
    defaultPlates("lbs")
  );

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
            availablePlatesKg={availablePlatesKg}
            setAvailablePlatesKg={setAvailablePlatesKg}
            availablePlatesLbs={availablePlatesLbs}
            setAvailablePlatesLbs={setAvailablePlatesLbs}
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
            availablePlatesKg={availablePlatesKg}
            availablePlatesLbs={availablePlatesLbs}
          />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default UnitConverter;
