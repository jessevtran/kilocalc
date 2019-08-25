import React, { Fragment } from "react";
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
  color: gray;
  background-color: gray;
  height: 15;
`;


const Barbell = ({ weight, unit, barLoad, platesAvailable }) => {

  const renderBarLoad = () => {
    return barLoad.map((plate, i) => {
      return (
        <Fragment key={`${plate}${i}`}>
          {!platesAvailable.includes(plate) && <span>+</span>}
          <Plate weight={plate} unit={unit} />
        </Fragment>
      );
    });
  };
  return (
    <div>
      <PlateContainer>
        <Bar>Bar</Bar>
        {renderBarLoad()}
      </PlateContainer>
    </div>
  );
};

export default Barbell;

