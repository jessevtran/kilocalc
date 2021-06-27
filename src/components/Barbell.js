import React, { Fragment } from "react";
import styled from "styled-components";
import Plate from "./Plate";
import { Typography } from "@material-ui/core";

const PlateContainer = styled.div`
  display: flex;
  align-items: center;

  height: 200px;
  width: 50%;
  margin: auto;

  // Default styling for the plate text.
  font-size: 12;
  font-weight: bold;
`;

const Bar = styled(Typography).attrs(() => ({
  variant: "overline"
}))`
  width: 50px;
  background-color: #333;
  color: white;
  height: 15;
`;

const Collar = styled(Typography).attrs(() => ({
  variant: "overline"
}))`
  background-color: gray;
  color: black;
  height: 35px;
  min-width: 30px;
  padding: 5px;
`;

const Barbell = ({
  weight,
  unit,
  barLoad,
  platesAvailable,
  barWeight,
  collarWeight
}) => {
  let remainder = barLoad.filter(
    plate =>
      !platesAvailable.some(plateAvailable => plateAvailable.weight === plate)
  );

  const hasRemainder =
    remainder && (Array.isArray(remainder) && remainder.length > 0);

  const renderBarLoad = () => {
    return barLoad.map((plate, i) => {
      return (
        <Fragment key={`${plate}${i}`}>
          {platesAvailable.some(
            plateAvailable => plateAvailable.weight === plate
          ) && <Plate weight={plate} unit={unit} />}
        </Fragment>
      );
    });
  };
  return (
    <div>
      <PlateContainer>
        <Bar>{barWeight}</Bar>
        {renderBarLoad()}
        {collarWeight > 0 && (
          <>
            <Collar>{collarWeight}</Collar>
            <Bar>&nbsp;</Bar>
          </>
        )}
      </PlateContainer>
      {hasRemainder && (
        <Typography variant="caption">
          + {remainder}
          {unit} remainder
        </Typography>
      )}
    </div>
  );
};

export default Barbell;
