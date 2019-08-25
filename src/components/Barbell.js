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


const Barbell = ({ weight, unit, barLoad, platesAvailable }) => {

  const renderBarLoad = () => {
    return barLoad.map((plate, i) => {
      return (
        <Fragment>
          {!platesAvailable.includes(plate) && <span>+</span>}
          <Plate key={`${plate}${i}`} weight={plate} unit={unit} />
        </Fragment>
      );
    });
  };
  return (
    <div>
      <PlateContainer>
        {renderBarLoad()}
      </PlateContainer>
    </div>
  );
};

export default Barbell;

