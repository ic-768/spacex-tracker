import { useLaunches } from "@/hooks/useLaunches";
import { useSelection } from "@/hooks/useSelection";

import { LaunchCard } from "./launch-card";

export function LaunchList() {
  const { launches, loading, error } = useLaunches();
  const { onSelect, isSelected } = useSelection();

  if (loading) return <p>Loading launches...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {launches.map((launch) => (
        <LaunchCard
          isSelected={isSelected(launch.id)}
          onSelect={onSelect}
          key={launch.id}
          launch={launch}
        />
      ))}
    </div>
  );
}
