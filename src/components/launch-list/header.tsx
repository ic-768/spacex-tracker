import { Rocket } from "lucide-react";

import type { Launch } from "@/graphql/types";

import { CardHeader } from "../ui/card";

interface LaunchHeaderProps {
  launch: Launch;
}

export const LaunchHeader = ({ launch }: LaunchHeaderProps) => (
  <CardHeader>
    <h3 className="text-lg font-semibold text-foreground mb-1 truncate">
      {launch.mission_name}
    </h3>
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Rocket className="size-4" />
      <span className="truncate">
        {launch.rocket?.rocket_name || "Unknown Rocket"}
      </span>
    </div>
  </CardHeader>
);
