import { useEffect, useMemo } from "react";
import { useQuery } from "@apollo/client/react";

import type { GetLaunchesData } from "@/graphql/types";
import {
  aggregateEnergy,
  aggregateMass,
  countLaunchesByRocket,
  countLaunchesByYear,
  getEnergyByRocket,
} from "@/utils/aggregation";

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

  const launches = useMemo(() => data?.launches ?? [], [data?.launches]);
  const { selection, setSelection, onToggleSelect, isSelected } =
    useSelection();

  const allLaunchIds = useMemo(
    () => launches.map((launch) => launch.id),
    [launches],
  );

  // Have all launches selected on initial render
  useEffect(() => {
    if (!data) return;

    setSelection(allLaunchIds);
  }, [data, setSelection, allLaunchIds]);

  const selectedLaunches = launches.filter((launch) =>
    selection.includes(launch.id),
  );

  const totalEnergy = aggregateEnergy(selectedLaunches);
  const totalPayloadMass = aggregateMass(selectedLaunches);
  const launchesByRocket = countLaunchesByRocket(selectedLaunches);
  const launchesByYear = countLaunchesByYear(selectedLaunches);
  const energyByRocket = getEnergyByRocket(selectedLaunches);

  const onClearSelection = () => {
    setSelection([]);
  };

  const onSelectAll = () => {
    setSelection(allLaunchIds);
  };

  return {
    fetched: {
      launches,
      loading,
      error,
    },
    selection: {
      isSelected,
      onToggleSelect,
      setSelection,
      onClearSelection,
      onSelectAll,
    },
    aggregatedStats: {
      totalEnergy,
      totalPayloadMass,
      launchesByRocket,
      launchesByYear,
      energyByRocket,
    },
  };
}
