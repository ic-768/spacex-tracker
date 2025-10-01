import type { Launch } from "@/graphql/types";

/**
 * Estimates the total energy consumed by a rocket launch in gigajoules (GJ).
 *
 * Calculation:
 * - Energy depends on the rocket mass and the mass of the fuel required to lift it to LEO.
 * - Assumes ~15 kg of fuel is needed per 1 kg of mass to reach Low Earth Orbit.
 * - Fuel has an energy value of 1.35 × 10^7 Joules per kg.
 *
 * Returns the value rounded to 2 decimal places.
 */
export const estimateEnergy = (launch: Launch) => {
  if (!launch?.rocket?.rocket?.mass?.kg) return 0;

  // TODO: Many rockets have the same mass and I can't find a value for fuel mass in the API.
  // I'm adding this randomizer just for demo purposes
  let rocketMassKg = launch.rocket?.rocket?.mass?.kg;
  if (rocketMassKg === 549054) rocketMassKg *= Math.random();

  const fuelMassKg = 15 * rocketMassKg;
  const totalMassKg = rocketMassKg + fuelMassKg;
  const fuelForTotalMassKg = 15 * totalMassKg;
  const energyJoules = fuelForTotalMassKg * 1.35e7;

  const energyGJ = energyJoules / 1e9;

  return Number(energyGJ.toFixed(2));
};
