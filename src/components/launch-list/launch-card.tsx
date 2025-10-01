import { Calendar } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Launch } from "@/graphql/types";
import { formatDate } from "@/utils/formatDate";

import { LaunchEnergyIndicator } from "./energy-indicator";
import { LaunchHeader } from "./header";
import { SelectionIndicator } from "./selection-indicator";

interface LaunchCardProps {
  launch: Launch;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const LaunchCard = ({
  launch,
  isSelected,
  onSelect,
}: LaunchCardProps) => (
  <Card
    as="button"
    onClick={() => onSelect(launch.id)}
    className={`relative gap-1 cursor-pointer transition-all duration-200 hover:shadow-lg ${
      isSelected
        ? "border-blue-500 bg-blue-50 shadow-md ring-2 ring-blue-200"
        : "hover:border-gray-300"
    }`}
  >
    <SelectionIndicator isSelected={isSelected} />

    <LaunchHeader launch={launch} />

    <CardContent className="flex flex-col gap-3">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="size-4" />
        <span>{formatDate(launch.launch_date_utc)}</span>
      </div>

      <Separator />

      <LaunchEnergyIndicator launch={launch} />
    </CardContent>
  </Card>
);
