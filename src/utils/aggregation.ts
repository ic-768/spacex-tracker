import type { Launch } from "@/graphql/types";

import { estimateEnergy } from "./estimateEnergy";

export const aggregateEnergy = (launches: Launch[]) =>
  launches.reduce((sum, launch) => sum + estimateEnergy(launch), 0);

export const aggregateMass = (launches: Launch[]) =>
  launches.reduce(
    (sum, launch) => sum + (launch?.rocket?.rocket?.mass?.kg ?? 0),
    0,
  );
