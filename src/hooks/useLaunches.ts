import { useQuery } from "@apollo/client/react";

import type { GetLaunchesData } from "@/graphql/types";

import { GET_LAUNCHES } from "../graphql/queries/launches";

export function useLaunches(limit = 5) {
  const { data, loading, error } = useQuery<GetLaunchesData>(GET_LAUNCHES, {
    variables: { limit },
  });

  return { launches: data?.launches ?? [], loading, error };
}
