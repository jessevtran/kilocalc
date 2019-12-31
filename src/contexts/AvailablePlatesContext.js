import { createContext } from "react";

const AvailablePlatesContext = createContext({
  availablePlatesKg: [25, 20, 15, 10, 5, 2.5, 1.25],
  availablePlatesLbs: [45, 25, 10, 5, 2.5],
  setAvailablePlatesKg: () => {},
  setAvailablePlatesLbs: () => {}
});

export default AvailablePlatesContext;
