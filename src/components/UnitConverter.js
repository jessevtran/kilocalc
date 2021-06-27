import React, { useState } from "react";
import BarbellsView from "./BarbellsView";
import WeightInput from "./WeightInput";
import AdvancedOptions from "./AdvancedOptions";
import TotalWeightContext from "../contexts/TotalWeightContext";
import UnitContext from "../contexts/UnitContext";
import RoundingContext from "../contexts/RoundingContext";
import BarAndCollarContext from "../contexts/BarAndCollarContext";
import { AvailablePlatesProvider } from "../contexts/AvailablePlatesContext";
import { Grid } from "@material-ui/core";

const UnitConverter = () => {
  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState("kg");
  const [rounding, setRounding] = useState("nearest");
  const [barWeight, setBarWeight] = useState(20);
  const [collarWeight, setCollarWeight] = useState(2.5);

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
              <AvailablePlatesProvider>
                <Grid container spacing={3}>
                  <Grid item lg={4}>
                    <WeightInput />
                    <AdvancedOptions />
                  </Grid>
                  <Grid item lg={8}>
                    <BarbellsView />
                  </Grid>
                </Grid>
              </AvailablePlatesProvider>
            </BarAndCollarContext.Provider>
          </RoundingContext.Provider>
        </UnitContext.Provider>
      </TotalWeightContext.Provider>
    </div>
  );
};

export default UnitConverter;
