import { createContext } from "react";

const BarAndCollarContext = createContext({
  barWeight: 20,
  setBarWeight: () => {},
  collarWeight: 2.5,
  setCollarWeight: () => {}
});

export default BarAndCollarContext;
