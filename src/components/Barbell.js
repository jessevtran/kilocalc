import React, { useState } from "react";
import styled from "styled-components";
import { Form, FormGroup, Label, Input } from "reactstrap";
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


const Barbell = ({ weight, unit, barLoad }) => {

  const renderBarLoad = () => {
    return barLoad.map((plate, i) => {
      return <Plate key={`${plate}${i}`} weight={plate} unit={unit} />
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

