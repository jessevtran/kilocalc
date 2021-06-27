import React, { useState } from "react";
import { Button, Collapse, Divider } from "@material-ui/core";
import RoundingInput from "./RoundingInput";
import AvailablePlatesInput from "./AvailablePlatesInput";
import BarWeightInput from "./BarWeightInput";
import CollarWeightInput from "./CollarWeightInput";
import styled from "styled-components";

const Spacer = styled.div`
  margin-bottom: 1rem;
`;

const AdvancedOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Hide Advanced Options" : "Show Advanced Options"}
      </Button>
      <Divider style={{ margin: "1rem 0" }} />
      <Collapse in={isOpen}>
        <CollarWeightInput />
        <Spacer />
        <BarWeightInput />
        <Spacer />
        <RoundingInput />
        <Spacer />
        <AvailablePlatesInput />
      </Collapse>
    </div>
  );
};

export default AdvancedOptions;
