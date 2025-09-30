import { Rocket } from "lucide-react";

import type { Launch } from "@/graphql/types";

import { CardHeader } from "../ui/card";

import { LaunchAvatar } from "./avatar";

interface LaunchHeaderProps {
  launch: Launch;
}

export const LaunchHeader = ({ launch }: LaunchHeaderProps) => (
  <CardHeader className="pb-3">
    <div className="flex items-start gap-4">
      <LaunchAvatar
        missionPatchUrl={launch.links?.mission_patch_small || ""}
        missionName={launch.mission_name}
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-semibold text-foreground mb-1 truncate">
          {launch.mission_name}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Rocket className="size-4" />
          <span className="truncate">
            {launch.rocket?.rocket_name || "Unknown Rocket"}
          </span>
        </div>
      </div>
    </div>
  </CardHeader>
);
