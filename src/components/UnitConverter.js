import React, { useState } from "react";
import BarbellsView from "./BarbellsView";
import WeightInput from "./WeightInput";
import AdvancedOptions from "./AdvancedOptions";
import TotalWeightContext from "../contexts/TotalWeightContext";
import UnitContext from "../contexts/UnitContext";
import RoundingContext from "../contexts/RoundingContext";
import BarAndCollarContext from "../contexts/BarAndCollarContext";

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
    <div>
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
          <RoundingContext.Provider
            value={{
              rounding: rounding,
              setRounding: setRounding
            }}
          >
            <BarAndCollarContext.Provider
              value={{
                barWeight: barWeight,
                setBarWeight: setBarWeight,
                collarWeight: collarWeight,
                setCollarWeight: setCollarWeight
              }}
            >
              <WeightInput />
              <BarbellsView
                availablePlatesKg={availablePlatesKg}
                availablePlatesLbs={availablePlatesLbs}
              />
              <AdvancedOptions
                availablePlatesKg={availablePlatesKg}
                setAvailablePlatesKg={setAvailablePlatesKg}
                availablePlatesLbs={availablePlatesLbs}
                setAvailablePlatesLbs={setAvailablePlatesLbs}
              />
            </BarAndCollarContext.Provider>
          </RoundingContext.Provider>
        </UnitContext.Provider>
      </TotalWeightContext.Provider>
    </div>
  );
};

export default UnitConverter;
