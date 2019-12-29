import React, { useState, Fragment } from "react";
import { Row, Col, Collapse, Card, CardBody, Button } from "reactstrap";
import RoundingInput from "./RoundingInput";
import AvailablePlatesInput from "./AvailablePlatesInput";
import BarWeightInput from "./BarWeightInput";

const AdvancedOptions = ({
  rounding,
  setRounding,
  availablePlatesKg,
  availablePlatesLbs,
  setAvailablePlatesKg,
  setAvailablePlatesLbs,
  unit,
  barWeight,
  setBarWeight
}) => {
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
                  unit={unit}
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
