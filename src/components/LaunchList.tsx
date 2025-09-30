import { useLaunches } from "@/hooks/useLaunches";

import { LaunchCard } from "./LaunchCard";

export function LaunchList() {
  const { launches, loading, error } = useLaunches();

  if (loading) return <p>Loading launches...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {launches.map((launch) => (
        <LaunchCard key={launch.id} launch={launch} />
      ))}
    </div>
  );
}
