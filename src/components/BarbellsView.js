import React, { useContext } from "react";
import Barbell from "./Barbell";
import { Container, Row, Col } from "reactstrap";
import { weightToBarLoad } from "../logic/barload";
import { kgToLbs, lbsToKg, displayWeight, plateRound } from "../logic/units";
import TotalWeightContext from "../contexts/TotalWeightContext";
import UnitContext from "../contexts/UnitContext";
import RoundingContext from "../contexts/RoundingContext";
import BarAndCollarContext from "../contexts/BarAndCollarContext";
import AvailablePlatesContext from "../contexts/AvailablePlatesContext";

const BarbellsView = () => {
  const { totalWeight } = useContext(TotalWeightContext);
  const { unit } = useContext(UnitContext);
  const { rounding } = useContext(RoundingContext);
  const { barWeight, collarWeight } = useContext(BarAndCollarContext);
  const { availablePlatesKg, availablePlatesLbs } = useContext(
    AvailablePlatesContext
  );

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

  const convert = unit === "kg" ? kgToLbs : lbsToKg;
  const otherUnit = unit === "kg" ? "lbs" : "kg";
  const otherSmallestPlate = getSmallestPlate(otherUnit);
  const otherWeight = plateRound(
    convert(totalWeight),
    otherSmallestPlate,
    rounding
  );

  // Treat 20kg and 45lb bar as the same for the "other" view
  // Not exactly correct, but it solves visual problems and is what most people are looking for
  let otherBarWeight;
  if (otherUnit === "lbs" && barWeight === 20) {
    otherBarWeight = 45;
  } else if (otherUnit === "kg" && barWeight === 45) {
    otherBarWeight = 20;
  } else {
    otherBarWeight = convert(barWeight);
  }

  let otherCollarWeight;

  if (otherUnit === "lbs" || (otherUnit === "kg" && collarWeight === 0)) {
    otherCollarWeight = 0;
  } else if (otherUnit === "kg" && collarWeight > 0) {
    otherCollarWeight = 2.5;
  } else {
    // lbs with collars (why)
    otherCollarWeight = 5.51;
  }

  const otherBarLoad = weightToBarLoad(
    otherWeight,
    getPlates(otherUnit),
    otherBarWeight,
    otherCollarWeight
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
            barWeight={displayWeight(barWeight)}
            collarWeight={collarWeight}
          />
        </Col>
        <Col sm="6">
          <h2>
            <span>{displayWeight(convert(totalWeight))}</span>
            <span>{otherUnit}</span>
          </h2>
          <h2>
            <span>Rounded ({rounding}):</span>
            <span>{plateRound(otherWeight, otherSmallestPlate, rounding)}</span>
            <span>{otherUnit}</span>
          </h2>
          <Barbell
            barLoad={otherBarLoad}
            weight={otherWeight}
            unit={otherUnit}
            platesAvailable={getPlates(otherUnit)}
            barWeight={displayWeight(otherBarWeight)}
            collarWeight={otherCollarWeight}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default BarbellsView;
