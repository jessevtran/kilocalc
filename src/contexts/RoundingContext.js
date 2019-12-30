import { createContext } from "react";

const RoundingContext = createContext({
  rounding: "nearest",
  setRounding: () => {}
});

export default RoundingContext;
