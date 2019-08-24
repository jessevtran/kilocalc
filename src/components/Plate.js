import React from "react";
import styled from "styled-components";

const DefaultPlate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30px;
  border-style: solid;
  border-width: 1px;
`;

const StyledPlate = styled(DefaultPlate)`
  height: ${props => getHeight(props.weight)};
  background-color: ${props => getColor(props.weight).plateColor};
  color: ${props => getColor(props.weight).textColor};
`;

const getHeight = (weight, unit) => {
  const maxHeight = 160;

  const kgHeights = weight => {
    let height;
    switch (weight) {
        // 25 and 20 are default maxHeight
      case 15: 
        height = maxHeight * 0.9;
        break;
      case 10: 
        height = maxHeight * 0.8;
        break;
      case 5:
        height = maxHeight * 0.7;
        break;
      case 2.5:
        height = maxHeight * 0.6;
        break;
      case 1.25:
        height = maxHeight * 0.5;
        break;
      default: 
        height = maxHeight;
    }
    return height;
  };

  const lbsHeights = weight => {
    let height;
    switch (weight) {
        // 45 is default maxHeight
      case 25: 
        height = maxHeight * 0.9;
        break;
      case 10: 
        height = maxHeight * 0.8;
        break;
      case 5:
        height = maxHeight * 0.7;
        break;
      case 2.5:
        height = maxHeight * 0.6;
        break;
      case 1.25:
        height = maxHeight * 0.5;
        break;
      default: 
        height = maxHeight;
    }
    return height;
  };

  const heights = (unit === "kg") ? kgHeights : lbsHeights;
  return `${heights(weight)}px`;
};

const getColor = (weight, unit) => {

  const kgColors = weight => {
    switch (weight) {
      case 25:
        return "red";
      case 20:
        return "blue";
      case 15: 
        return "yellow";
      case 10: 
        return "green";
      case 5:
        return "white";
      case 2.5:
        return "black";
      case 1.25:
        return "gray";
      default: 
        return "purple";
    }
  };

  const lbsColors = weight => {
    return "gray";
  };

  const textColors = plateColor => {
    const darkColors = ["black", "blue"];
    if (darkColors.includes(plateColor)) {
      return "white";
    } else {
      return "black";
    }
  };

  const plateColors = (unit === "kg") ? kgColors : lbsColors;
  const plateColor = plateColors(weight);
  const textColor = textColors(plateColor);

  return {
    plateColor: plateColor,
    textColor: textColor
  };
};

const Plate = ({ weight, unit}) => {
  return (
    <StyledPlate weight={weight}>{weight}</StyledPlate>
  );
};

export default Plate;
