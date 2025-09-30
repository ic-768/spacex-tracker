import { Rocket } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface LaunchAvatarProps {
  missionPatchUrl?: string;
  missionName: string;
}

export const LaunchAvatar = ({
  missionPatchUrl,
  missionName,
}: LaunchAvatarProps) => (
  <Avatar className="size-16 rounded-md">
    {missionPatchUrl ? (
      <AvatarImage
        src={missionPatchUrl}
        alt={missionName}
        className="object-contain"
      />
    ) : (
      <AvatarFallback className="rounded-md bg-muted">
        <Rocket className="size-8 text-muted-foreground" />
      </AvatarFallback>
    )}
  </Avatar>
);
