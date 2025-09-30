export const estimateEnergy = (launch) => {
  if (!launch?.rocket?.rocket?.mass?.kg) return null;

  const rocketMassKg = launch.rocket?.rocket?.mass?.kg;
  const fuelMassKg = 15 * rocketMassKg;
  const totalMassKg = rocketMassKg + fuelMassKg;
  const fuelForTotalMassKg = 15 * totalMassKg;
  const energyJoules = fuelForTotalMassKg * 1.35e7;
  const energyGJ = energyJoules / 1e9;
  return energyGJ.toFixed(2);
};
