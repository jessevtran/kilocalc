import React, { useState, Fragment, useContext } from "react";
import { Row, Col, Collapse, Card, CardBody, Button } from "reactstrap";
import RoundingInput from "./RoundingInput";
import AvailablePlatesInput from "./AvailablePlatesInput";
import BarWeightInput from "./BarWeightInput";
import UnitContext from "../contexts/UnitContext";

const AdvancedOptions = ({
  rounding,
  setRounding,
  availablePlatesKg,
  availablePlatesLbs,
  setAvailablePlatesKg,
  setAvailablePlatesLbs,
  barWeight,
  setBarWeight
}) => {
  const unitCtx = useContext(UnitContext);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Button color="secondary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Advanced Options" : "Show Advanced Options"}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
            <Row>
              <Col>
                <BarWeightInput
                  unit={unitCtx.unit}
                  barWeight={barWeight}
                  setBarWeight={setBarWeight}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <RoundingInput rounding={rounding} setRounding={setRounding} />
              </Col>
            </Row>
            <Row>
              <Col>
                <AvailablePlatesInput
                  availablePlatesKg={availablePlatesKg}
                  setAvailablePlatesKg={setAvailablePlatesKg}
                  availablePlatesLbs={availablePlatesLbs}
                  setAvailablePlatesLbs={setAvailablePlatesLbs}
                />
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Collapse>
    </Fragment>
  );
};

export default AdvancedOptions;
