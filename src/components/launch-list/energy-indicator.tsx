import type { Launch } from "@/graphql/types";
import { estimateEnergy } from "@/utils/estimateEnergy";

interface LaunchEnergyProps {
  launch: Launch;
}

export const LaunchEnergyIndicator = ({ launch }: LaunchEnergyProps) => (
  <div className="flex justify-between items-center">
    <span className="text-xs text-muted-foreground">Est. Energy:</span>
    <span className="text-sm font-semibold text-foreground">
      {estimateEnergy(launch)} GJ
    </span>
  </div>
);
