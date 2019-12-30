import React, { useContext } from "react";
import Barbell from "./Barbell";
import { Container, Row, Col } from "reactstrap";
import { weightToBarLoad } from "../logic/barload";
import { kgToLbs, lbsToKg, displayWeight, plateRound } from "../logic/units";
import TotalWeightContext from "../contexts/TotalWeightContext";
import UnitContext from "../contexts/UnitContext";

const BarbellsView = ({
  rounding,
  barWeight,
  collarWeight,
  availablePlatesKg,
  availablePlatesLbs
}) => {
  const { totalWeight } = useContext(TotalWeightContext);
  const { unit } = useContext(UnitContext);

  if (totalWeight === 0) {
    return null;
  }

  const getPlates = unit => {
    return unit === "kg" ? availablePlatesKg : availablePlatesLbs;
  };

  const getSmallestPlate = unit => {
    const plates = getPlates(unit);
    return plates[plates.length - 1];
  };

  const barLoad = weightToBarLoad(
    totalWeight,
    getPlates(unit),
    barWeight,
    collarWeight
  );

  const smallestPlate = getSmallestPlate(unit);
  const convert = unit === "kg" ? kgToLbs : lbsToKg;
  const otherUnit = unit === "kg" ? "lbs" : "kg";
  const otherWeight = convert(
    plateRound(totalWeight),
    otherUnit,
    smallestPlate,
    rounding
  );
  const otherBarLoad = weightToBarLoad(
    plateRound(otherWeight, otherUnit, smallestPlate, rounding),
    getPlates(otherUnit),
    convert(barWeight),
    convert(collarWeight)
  );
  return (
    <Container>
      <Row>
        <Col sm="6">
          <h2>
            {totalWeight}
            {unit}
          </h2>
          <Barbell
            barLoad={barLoad}
            weight={totalWeight}
            unit={unit}
            platesAvailable={getPlates(unit)}
          />
        </Col>
        <Col sm="6">
          <h2>
            {displayWeight(convert(totalWeight))}
            {otherUnit}
          </h2>
          <h2>
            Rounded ({rounding}):{" "}
            {plateRound(otherWeight, otherUnit, smallestPlate, rounding)}
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
