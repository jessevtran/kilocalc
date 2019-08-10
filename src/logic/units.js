export const kgToLbs = kg => {
  return kg * 2.20462262;
};

export const lbsToKg = lbs => {
  return lbs / 2.20462262;
};

export const displayWeight = weight => {
  return weight.toFixed(2).replace(".00", "");
};
