import { useLaunches } from "@/hooks/useLaunches";

import { LaunchCard } from "./launch-card";
import { LimitSlider } from "./limit-slider";

export function LaunchList() {
  const { launches, loading, error, limit, onSetLimit, isSelected, onSelect } =
    useLaunches();

  if (loading && !launches) return <p>Loading launches...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col gap-6">
      <LimitSlider limit={limit} onChange={onSetLimit} />
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {launches.map((launch) => (
          <LaunchCard
            key={launch.id}
            launch={launch}
            isSelected={isSelected(launch.id)}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  );
}
