import { createContext } from "react";

const UnitContext = createContext({
  unit: "kg",
  setUnit: () => {}
});

export default UnitContext;
