import React from "react";
import Barbell from "./Barbell";
import { Container, Row, Col } from "reactstrap";
import { weightToBarLoad } from "../logic/barload";
import { kgToLbs, lbsToKg, displayWeight } from "../logic/units";

const BarbellsView = ({
  weight,
  unit,
  rounding,
  collarWeight,
  availablePlatesKg,
  availablePlatesLbs
}) => {
  if (weight === 0) {
    return null;
  }

  const getPlates = unit => {
    return unit === "kg" ? availablePlatesKg : availablePlatesLbs;
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
    return roundingFn(weight / roundTo) * roundTo;
  };

  // TODO: Add bar weight
  const barLoad = weightToBarLoad(weight, getPlates(unit), collarWeight);

  const convert = unit === "kg" ? kgToLbs : lbsToKg;
  const otherUnit = unit === "kg" ? "lbs" : "kg";
  const otherWeight = convert(plateRound(weight), otherUnit);
  const otherBarLoad = weightToBarLoad(
    plateRound(otherWeight, otherUnit),
    getPlates(otherUnit),
    displayWeight(plateRound(convert(collarWeight)), otherUnit)
  );
  return (
    <Container>
      <Row>
        <Col sm="6">
          <h2>
            {weight}
            {unit}
          </h2>
          <Barbell
            barLoad={barLoad}
            weight={weight}
            unit={unit}
            platesAvailable={getPlates(unit)}
          />
        </Col>
        <Col sm="6">
          <h2>
            {displayWeight(convert(weight))}
            {otherUnit}
          </h2>
          <h2>
            Rounded ({rounding}): {plateRound(otherWeight, otherUnit)}
            {otherUnit}
          </h2>
          <Barbell
            barLoad={otherBarLoad}
            weight={otherWeight}
            unit={otherUnit}
            platesAvailable={getPlates(otherUnit)}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BarbellsView;
