// Given a weight return an array of plates representing one side of the bar
export const weightToBarLoad = (weight, plates, barAndCollarWeight) => {
  // The plates that will go on one side of the bar
  let barLoad = [];

  // Amount of weight to go on one side of the bar
  let sideWeight = (weight - barAndCollarWeight) / 2;

  for (let i = 0; i < plates.length; i++) {
    let plateWeight = plates[i];
    while (plateWeight <= sideWeight) {
      barLoad.push(plateWeight);
      sideWeight -= plateWeight;
    }
  }

  if (sideWeight > 0) {
    barLoad.push(sideWeight);
  }
  return barLoad;
};
