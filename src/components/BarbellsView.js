import React, { useContext } from "react";
import Barbell from "./Barbell";
import { weightToBarLoad } from "../logic/barload";
import { kgToLbs, lbsToKg, displayWeight, plateRound } from "../logic/units";
import TotalWeightContext from "../contexts/TotalWeightContext";
import UnitContext from "../contexts/UnitContext";
import RoundingContext from "../contexts/RoundingContext";
import BarAndCollarContext from "../contexts/BarAndCollarContext";
import { useAvailablePlates } from "../contexts/AvailablePlatesContext";
import { Grid, Container, Typography } from "@material-ui/core";

const BarbellsView = () => {
  const { totalWeight } = useContext(TotalWeightContext);
  const { unit } = useContext(UnitContext);
  const { rounding } = useContext(RoundingContext);
  const { barWeight, collarWeight } = useContext(BarAndCollarContext);
  const { availablePlates } = useAvailablePlates();

  if (totalWeight === 0) {
    return null;
  }

  const getPlates = unit => {
    const plates =
      unit === "kg"
        ? availablePlates.availablePlatesKg
        : availablePlates.availablePlatesLbs;
    return plates.filter(plate => plate.pairs > 0);
  };

  const getSmallestPlate = unit => {
    const plates = getPlates(unit);
    return plates[plates.length - 1].weight;
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
      <Grid container spacing={5}>
        <Grid item sm={6}>
          <Typography variant="h5">
            {totalWeight}
            {unit}
          </Typography>
          <Barbell
            barLoad={barLoad}
            weight={totalWeight}
            unit={unit}
            platesAvailable={getPlates(unit)}
            barWeight={displayWeight(barWeight)}
            collarWeight={collarWeight}
          />
        </Grid>
        <Grid item sm={6}>
          <Typography variant="h5">
            <span>{displayWeight(convert(totalWeight))}</span>
            <span>{otherUnit}</span>
          </Typography>
          <Barbell
            barLoad={otherBarLoad}
            weight={otherWeight}
            unit={otherUnit}
            platesAvailable={getPlates(otherUnit)}
            barWeight={displayWeight(otherBarWeight)}
            collarWeight={otherCollarWeight}
          />
          <Typography variant="caption">
            <span>Rounded {rounding}: </span>
            <span>{plateRound(otherWeight, otherSmallestPlate, rounding)}</span>
            <span>{otherUnit}</span>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BarbellsView;
