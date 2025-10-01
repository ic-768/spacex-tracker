import { useQuery } from "@apollo/client/react";

import type { GetLaunchesData } from "@/graphql/types";
import { estimateEnergy } from "@/utils/estimateEnergy";

import { GET_LAUNCHES } from "../graphql/queries/launches";

import { useSelection } from "./useSelection";

/**
 * Fetches SpaceX launches using Apollo Client.
 * Provides selection management hooks and total energy for selected launches.
 */
export function useLaunches(limit = 20) {
  const { data, loading, error } = useQuery<GetLaunchesData>(GET_LAUNCHES, {
    variables: { limit },
  });

  const launches = data?.launches ?? [];

  const { selection, setSelection, onSelect, isSelected } = useSelection();

  const totalEnergy = launches
    .filter((launch) => selection.includes(launch.id))
    .reduce((sum, launch) => sum + estimateEnergy(launch), 0);

  return {
    launches,
    loading,
    error,
    totalEnergy,
    isSelected,
    onSelect,
    setSelection,
  };
}
