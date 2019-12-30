import { createContext } from "react";

const TotalWeightContext = createContext({
  totalWeight: 0,
  setTotalWeight: () => {}
});

export default TotalWeightContext;
