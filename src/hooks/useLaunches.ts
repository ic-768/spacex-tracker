import { useQuery } from "@apollo/client/react";

import type { GetLaunchesData } from "@/graphql/types";

import { GET_LAUNCHES } from "../graphql/queries/launches";

import { useSelection } from "./useSelection";

/**
 * Fetches SpaceX launches using Apollo Client and provides selection management hooks.
 */
export function useLaunches(limit = 20) {
  const { data, loading, error } = useQuery<GetLaunchesData>(GET_LAUNCHES, {
    variables: { limit },
  });

  return {
    launches: data?.launches ?? [],
    loading,
    error,
    ...useSelection(),
  };
}
