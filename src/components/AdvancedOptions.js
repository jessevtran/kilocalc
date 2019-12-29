import React, { useState, Fragment } from "react";
import {
  Row,
  Col,
  Collapse,
  Card,
  CardBody,
  Button,
  ButtonGroup
} from "reactstrap";
import RoundingInput from "./RoundingInput";
import AvailablePlatesInput from "./AvailablePlatesInput";

const AdvancedOptions = ({
  rounding,
  setRounding,
  availablePlatesKg,
  availablePlatesLbs,
  setAvailablePlatesKg,
  setAvailablePlatesLbs
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Advanced Options" : "Show Advanced Options"}
      </Button>
      <Collapse isOpen={isOpen}>
        <Card>
          <CardBody>
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
