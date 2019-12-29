import React, { Fragment, useState } from "react";
import { Form, Card, CardBody } from "reactstrap";
import BarbellsView from "./BarbellsView";
import WeightInput from "./WeightInput";
import AdvancedOptions from "./AdvancedOptions";

const Inputs = ({
  weight,
  setWeight,
  unit,
  setUnit,
  rounding,
  setRounding,
  barAndCollarWeight,
  availablePlatesKg,
  setAvailablePlatesKg,
  availablePlatesLbs,
  setAvailablePlatesLbs,
  barWeight,
  setBarWeight,
  collarWeight,
  setCollarWeight
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
        barWeight={barWeight}
        setBarWeight={setBarWeight}
        collarWeight={collarWeight}
        setCollarWeight={setCollarWeight}
      />
    </Form>
  );
};

const UnitConverter = () => {
  const defaultPlates = unit => {
    return unit === "kg"
      ? [25, 20, 15, 10, 5, 2.5, 1.25]
      : [45, 25, 10, 5, 2.5];
  };

  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState("kg");
  const [rounding, setRounding] = useState("nearest");
  const [barWeight, setBarWeight] = useState(20);
  const [collarWeight, setCollarWeight] = useState(2.5);

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
            availablePlatesKg={availablePlatesKg}
            setAvailablePlatesKg={setAvailablePlatesKg}
            availablePlatesLbs={availablePlatesLbs}
            setAvailablePlatesLbs={setAvailablePlatesLbs}
            barWeight={barWeight}
            setBarWeight={setBarWeight}
            collarWeight={collarWeight}
            setCollarWeight={setCollarWeight}
          />
          <AdvancedOptions
            rounding={rounding}
            setRounding={setRounding}
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
            unit={unit}
            rounding={rounding}
            barWeight={barWeight}
            collarWeight={collarWeight}
            availablePlatesKg={availablePlatesKg}
            availablePlatesLbs={availablePlatesLbs}
          />
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default UnitConverter;
