import type { Launch } from "@/graphql/types";

import { estimateEnergy } from "./estimateEnergy";

export const aggregateEnergy = (launches: Launch[]) =>
  Number(
    launches
      .reduce((sum, launch) => sum + estimateEnergy(launch), 0)
      .toFixed(2),
  );

export const aggregateMass = (launches: Launch[]) =>
  launches.reduce(
    (sum, launch) => sum + (launch?.rocket?.rocket?.mass?.kg ?? 0),
    0,
  );

/**
 * Counts how many times each rocket type was used across the launches.
 * Returns an array of objects with rocket name and count.
 */
export const countLaunchesByRocket = (launches: Launch[]) => {
  const rocketMap: Record<string, number> = {};

  launches.forEach((launch) => {
    const rocket = launch.rocket.rocket_name;
    rocketMap[rocket] = (rocketMap[rocket] || 0) + 1;
  });

  return Object.entries(rocketMap).map(([name, count]) => ({ name, count }));
};

/**
 * Counts the number of launches per year.
 * Returns an array of objects with year and count.
 */
export const countLaunchesByYear = (launches: Launch[]) => {
  const yearMap: Record<string, number> = {};

  launches.forEach((launch) => {
    const year = new Date(launch.launch_date_utc).getFullYear().toString();
    yearMap[year] = (yearMap[year] || 0) + 1;
  });

  return Object.entries(yearMap).map(([year, count]) => ({ year, count }));
};

/**
 * Calculates the total estimated energy usage per rocket.
 * Returns an array of objects with rocket name and total energy.
 */
export const getEnergyByRocket = (launches: Launch[]) => {
  const rocketMap: Record<string, number> = {};

  launches.forEach((launch) => {
    const rocket = launch.rocket.rocket_name;
    rocketMap[rocket] = Number(
      (rocketMap[rocket] || 0) + estimateEnergy(launch).toFixed(2),
    );
  });

  return Object.entries(rocketMap).map(([name, energy]) => ({ name, energy }));
};
