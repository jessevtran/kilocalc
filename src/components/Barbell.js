import React from "react";
import { weightToBarLoad } from "../logic/barload";

const Barbell = ({ weight, unit, barAndCollarWeight }) => {
  const plates = unit === "kg" ? [25, 20, 15, 10, 5, 2.5] : [45, 25, 10, 5, 2.5];
  const barLoad = weightToBarLoad(weight, plates, barAndCollarWeight);
  const renderBarLoad = () => {
    return barLoad.map((plate, i) => {
      return <span key={`${plate}${i}`}>{plate},</span>
    });
  };
  return <div>{renderBarLoad()}</div>
};

export default Barbell;

