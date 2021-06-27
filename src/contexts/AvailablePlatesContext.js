import React, { createContext, useReducer } from "react";

const AvailablePlatesContext = createContext();
const initialState = {
  availablePlatesKg: [
    { weight: 50, pairs: 0 },
    { weight: 25, pairs: 8 },
    { weight: 20, pairs: 1 },
    { weight: 15, pairs: 1 },
    { weight: 10, pairs: 1 },
    { weight: 5, pairs: 1 },
    { weight: 2.5, pairs: 1 },
    { weight: 1.25, pairs: 1 }
  ],
  availablePlatesLbs: [
    { weight: 45, pairs: 8 },
    { weight: 35, pairs: 0 },
    { weight: 25, pairs: 1 },
    { weight: 10, pairs: 1 },
    { weight: 5, pairs: 1 },
    { weight: 2.5, pairs: 1 }
  ]
};

const updatePairs = (plates, weight, unit, newPairs) => {
  const plate = plates.filter(plate => plate.weight === weight)[0];
  if (plate) {
    const newPairsNum = Number(newPairs);
    if (!isNaN(newPairsNum)) {
      plate.pairs = Number(newPairs);
    }
  }

  return plates;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update_pairs":
      return {
        ...state,
        availablePlatesKg:
          action.unit === "kg"
            ? updatePairs(
                state.availablePlatesKg,
                action.weight,
                action.unit,
                action.newPairs
              )
            : state.availablePlatesKg,
        availablePlatesLbs:
          action.unit === "lbs"
            ? updatePairs(
                state.availablePlatesLbs,
                action.weight,
                action.unit,
                action.newPairs
              )
            : state.availablePlatesLbs
      };
    default:
      return {
        ...state
      };
  }
};

const AvailablePlatesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AvailablePlatesContext.Provider
      value={{ availablePlates: state, dispatchAvailablePlates: dispatch }}
    >
      {children}
    </AvailablePlatesContext.Provider>
  );
};

const useAvailablePlates = () => {
  const context = React.useContext(AvailablePlatesContext);
  if (context === undefined) {
    throw new Error(
      "useAvailablePlates must be used within a AvailablePlatesProvider"
    );
  }
  return context;
};

export { AvailablePlatesProvider, useAvailablePlates };
