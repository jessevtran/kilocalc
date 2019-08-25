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
      setAvailablePlatesKg(newPlates);
    } else {
      newPlates.push(newPlate);
      setAvailablePlatesKg(
        newPlates.sort((a, b) => {
          return b - a;
        })
      );
    }
  };

  const KiloButton = ({ weight }) => {
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

  return (
    <Fragment>
      <div>
        <Button color="primary" onClick={() => setIsOpen(!isOpen)}>
          Set Available Plates
        </Button>
      </div>
      <div>
        <Collapse isOpen={isOpen}>
          <Card>
            <CardBody>
              <ButtonGroup>
                <KiloButton weight={25} />
                <KiloButton weight={20} />
                <KiloButton weight={15} />
                <KiloButton weight={10} />
                <KiloButton weight={5} />
                <KiloButton weight={2.5} />
                <KiloButton weight={1.25} />
                <KiloButton weight={1} />
                <KiloButton weight={0.5} />
                <KiloButton weight={0.25} />
              </ButtonGroup>
            </CardBody>
          </Card>
        </Collapse>
      </div>
    </Fragment>
  );
};

export default AvailablePlatesInput;
