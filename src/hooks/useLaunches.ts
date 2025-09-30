import { useState } from "react";
import { useQuery } from "@apollo/client/react";

import type { GetLaunchesData } from "@/graphql/types";

import { GET_LAUNCHES } from "../graphql/queries/launches";

import { useSelection } from "./useSelection";

/**
 * Fetches SpaceX launches using Apollo Client and provides selection management hooks.
 */
export function useLaunches(limit = 5) {
  const [limitState, setLimitState] = useState(limit);

  const { data, loading, error } = useQuery<GetLaunchesData>(GET_LAUNCHES, {
    variables: { limit: limitState },
  });

  const { setSelection, isSelected, onSelect } = useSelection();

  // if removing launches, clear selection to avoid stale value
  const onSetLimit = (value: number) => {
    if (value < limit) setSelection([]);
    setLimitState(value);
  };

  return {
    launches: data?.launches ?? [],
    loading,
    error,
    limit: limitState,
    setLimit: setLimitState,
    onSetLimit,
    isSelected,
    onSelect,
  };
}
