import type { Launch } from "@/graphql/types";

import { LaunchCard } from "./launch-card";

interface LaunchListProps {
  launches: Launch[];
  isSelected: (id: string) => boolean;
  onSelect: (id: string) => void;
}
export function LaunchList({
  launches,
  isSelected,
  onSelect,
}: LaunchListProps) {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {launches.map((launch) => (
        <LaunchCard
          key={launch.id}
          launch={launch}
          isSelected={isSelected(launch.id)}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
