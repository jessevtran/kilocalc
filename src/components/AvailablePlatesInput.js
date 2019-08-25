import React, { Fragment, useState } from "react";
import { Collapse, Card, CardBody, Button, ButtonGroup } from "reactstrap";

const AvailablePlatesInput = ({
  availablePlatesKg,
  setAvailablePlatesKg,
  availablePlatesLbs,
  setAvailablePlatesLbs
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePlate = (plates, newPlate, update) => {
    let newPlates = [...plates];
    if (newPlates.includes(newPlate)) {
      newPlates = newPlates.filter(plate => plate !== newPlate);
      update(newPlates);
    } else {
      newPlates.push(newPlate);
      update(
        newPlates.sort((a, b) => {
          return b - a;
        })
      );
    }
  };

  const KgButton = ({ weight }) => {
    return (
      <Button
        color="secondary"
        onClick={() =>
          togglePlate(availablePlatesKg, weight, setAvailablePlatesKg)
        }
        active={availablePlatesKg.includes(weight)}
      >
        {weight}
      </Button>
    );
  };

  const LbsButton = ({ weight }) => {
    return (
      <Button
        color="secondary"
        onClick={() =>
          togglePlate(availablePlatesLbs, weight, setAvailablePlatesLbs)
        }
        active={availablePlatesLbs.includes(weight)}
      >
        {weight}
      </Button>
    );
  };

  return (
    <Fragment>
      <h4>Set Available Plates</h4>
      <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide" : "Show"}
      </Button>
      <div>
        <Collapse isOpen={isOpen}>
          <Card>
            <div>Kg</div>
            <CardBody>
              <ButtonGroup>
                <KgButton weight={25} />
                <KgButton weight={20} />
                <KgButton weight={15} />
                <KgButton weight={10} />
                <KgButton weight={5} />
              </ButtonGroup>
              <ButtonGroup>
                <KgButton weight={2.5} />
                <KgButton weight={1.25} />
                <KgButton weight={1} />
                <KgButton weight={0.5} />
                <KgButton weight={0.25} />
              </ButtonGroup>
            </CardBody>
            <div>Lbs</div>
            <CardBody>
              <ButtonGroup>
                <LbsButton weight={45} />
                <LbsButton weight={35} />
                <LbsButton weight={25} />
                <LbsButton weight={10} />
                <LbsButton weight={5} />
              </ButtonGroup>
              <ButtonGroup>
                <LbsButton weight={2.5} />
                <LbsButton weight={1.25} />
                <LbsButton weight={1} />
                <LbsButton weight={0.5} />
                <LbsButton weight={0.25} />
              </ButtonGroup>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </Fragment>
  );
};

export default AvailablePlatesInput;
