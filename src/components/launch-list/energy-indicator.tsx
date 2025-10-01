import { memo } from "react";

import type { Launch } from "@/graphql/types";
import { estimateEnergy } from "@/utils/estimateEnergy";

interface LaunchEnergyProps {
  launch: Launch;
}

// Note: I wouldn't normally memo this without a performance issue to justify it, but since estimateEnergy uses Math.random to randomize the kg, it's needed so it doesn't re-render every time selection changes
export const LaunchEnergyIndicator = memo(({ launch }: LaunchEnergyProps) => (
  <div className="flex justify-between">
    <span className="text-xs text-muted-foreground">Est. Energy:</span>
    <span className="text-sm font-semibold text-foreground">
      {estimateEnergy(launch)} GJ
    </span>
  </div>
));
