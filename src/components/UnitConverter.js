import React, { Fragment, useState } from "react";
import { Card, CardBody } from "reactstrap";
import BarbellsView from "./BarbellsView";
import WeightInput from "./WeightInput";
import AdvancedOptions from "./AdvancedOptions";
import TotalWeightContext from "../contexts/TotalWeightContext";
import UnitContext from "../contexts/UnitContext";

const UnitConverter = () => {
  const defaultPlates = unit => {
    return unit === "kg"
      ? [25, 20, 15, 10, 5, 2.5, 1.25]
      : [45, 25, 10, 5, 2.5];
  };

  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState("kg");
  const [rounding, setRounding] = useState("nearest");
  const [barWeight, setBarWeight] = useState(20);
  const [collarWeight, setCollarWeight] = useState(2.5);

  const [availablePlatesKg, setAvailablePlatesKg] = useState(
    defaultPlates("kg")
  );
  const [availablePlatesLbs, setAvailablePlatesLbs] = useState(
    defaultPlates("lbs")
  );

  return (
    <Fragment>
      <Card>
        <CardBody>
          <TotalWeightContext.Provider
            value={{
              totalWeight: weight,
              setTotalWeight: setWeight
            }}
          >
            <UnitContext.Provider
              value={{
                unit: unit,
                setUnit: setUnit
              }}
            >
              <WeightInput
                rounding={rounding}
                setRounding={setRounding}
                barWeight={barWeight}
                setBarWeight={setBarWeight}
                collarWeight={collarWeight}
                setCollarWeight={setCollarWeight}
              />
              <BarbellsView
                rounding={rounding}
                barWeight={barWeight}
                collarWeight={collarWeight}
                availablePlatesKg={availablePlatesKg}
                availablePlatesLbs={availablePlatesLbs}
              />
              <AdvancedOptions
                rounding={rounding}
                setRounding={setRounding}
                availablePlatesKg={availablePlatesKg}
                setAvailablePlatesKg={setAvailablePlatesKg}
                availablePlatesLbs={availablePlatesLbs}
                setAvailablePlatesLbs={setAvailablePlatesLbs}
                barWeight={barWeight}
                setBarWeight={setBarWeight}
              />
            </UnitContext.Provider>
          </TotalWeightContext.Provider>
        </CardBody>
      </Card>
    </Fragment>
  );
};

export default UnitConverter;
