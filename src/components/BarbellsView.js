import React, { useContext } from "react";
import Barbell from "./Barbell";
import { Container, Row, Col } from "reactstrap";
import { weightToBarLoad } from "../logic/barload";
import { kgToLbs, lbsToKg, displayWeight, plateRound } from "../logic/units";
import TotalWeightContext from "../contexts/TotalWeightContext";
import UnitContext from "../contexts/UnitContext";
import RoundingContext from "../contexts/RoundingContext";
import BarAndCollarContext from "../contexts/BarAndCollarContext";

const BarbellsView = ({ availablePlatesKg, availablePlatesLbs }) => {
  const { totalWeight } = useContext(TotalWeightContext);
  const { unit } = useContext(UnitContext);
  const { rounding } = useContext(RoundingContext);
  const { barWeight, collarWeight } = useContext(BarAndCollarContext);

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
            <span>{displayWeight(convert(totalWeight))}</span>
            <span>{otherUnit}</span>
          </h2>
          <h2>
            <span>Rounded ({rounding}):</span>
            <span>
              {plateRound(otherWeight, otherUnit, smallestPlate, rounding)}
            </span>
            <span>{otherUnit}</span>
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
