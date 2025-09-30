import { CheckCircle, XCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";

interface LaunchStatusBadgeProps {
  success: boolean | null;
}

export const LaunchStatusBadge = ({ success }: LaunchStatusBadgeProps) => {
  switch (success) {
    case true:
      return (
        <Badge variant="default" className="bg-green-500 hover:bg-green-600">
          <CheckCircle className="size-3 mr-1" />
          Successful Launch
        </Badge>
      );
    case false:
      return (
        <Badge variant="destructive">
          <XCircle className="size-3 mr-1" />
          Failed Launch
        </Badge>
      );
    default:
      return (
        <Badge variant="secondary">
          <div className="size-3 rounded-full bg-gray-400 mr-1" />
          Status Unknown
        </Badge>
      );
  }
};
