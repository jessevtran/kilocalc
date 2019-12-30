import React, { Fragment, useState } from "react";
import styled from "styled-components";
import Plate from "./Plate";

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

const Bar = styled.div`
  width: 50px;
  background-color: gray;
  height: 15;
`;

const Collar = styled.div`
  background-color: gray;
  color: black;
  height: 45px;
  min-width: 30px;
  padding: 10px;
`;

const Barbell = ({
  weight,
  unit,
  barLoad,
  platesAvailable,
  barWeight,
  collarWeight
}) => {
  let remainder = barLoad.filter(plate => !platesAvailable.includes(plate));
  const hasRemainder =
    remainder && (Array.isArray(remainder) && remainder.length > 0);

  const renderBarLoad = () => {
    return barLoad.map((plate, i) => {
      return (
        <Fragment key={`${plate}${i}`}>
          {platesAvailable.includes(plate) && (
            <Plate weight={plate} unit={unit} />
          )}
        </Fragment>
      );
    });
  };
  return (
    <div>
      <PlateContainer>
        <Bar>{barWeight}</Bar>
        {renderBarLoad()}
        {collarWeight > 0 && <Collar>{collarWeight}</Collar>}
      </PlateContainer>
      {hasRemainder && <div>+ {remainder}</div>}
    </div>
  );
};

export default Barbell;
