import type { ErrorLike } from "@apollo/client";

import type { Launch } from "@/graphql/types";

import { LaunchCard } from "./launch-card";

interface LaunchListProps {
  launches: Launch[];
  loading: boolean;
  error?: ErrorLike;
  isSelected: (id: string) => boolean;
  onSelect: (id: string) => void;
}
export function LaunchList({
  launches,
  loading,
  error,
  isSelected,
  onSelect,
}: LaunchListProps) {
  if (loading && !launches) return <p>Loading launches...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col gap-6">
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
