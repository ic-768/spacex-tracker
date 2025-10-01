import { useQuery } from "@apollo/client/react";

import type { GetLaunchesData } from "@/graphql/types";
import { aggregateEnergy, aggregateMass } from "@/utils/aggregation";

import { GET_LAUNCHES } from "../graphql/queries/launches";

import { useSelection } from "./useSelection";

/**
 * Fetches SpaceX launches using Apollo Client.
 * Provides selection management hooks and stats for selected launches.
 */
export function useLaunches(limit = 20) {
  const { data, loading, error } = useQuery<GetLaunchesData>(GET_LAUNCHES, {
    variables: { limit },
  });

  const launches = data?.launches ?? [];
  const { selection, setSelection, onSelect, isSelected } = useSelection();

  const totalEnergy = aggregateEnergy(
    launches.filter((launch) => selection.includes(launch.id)),
  );

  const totalPayloadMass = aggregateMass(
    launches.filter((launch) => selection.includes(launch.id)),
  );

  return {
    launchFetch: {
      launches,
      loading,
      error,
    },
    launchSelection: {
      isSelected,
      onSelect,
      setSelection,
    },
    aggregatedStats: {
      totalEnergy,
      totalPayloadMass,
    },
  };
}
