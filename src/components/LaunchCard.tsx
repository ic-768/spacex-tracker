import { Calendar, CheckCircle, Rocket, XCircle } from "lucide-react";

import type { Launch } from "@/graphql/types";
import { estimateEnergy } from "@/utils/estimateEnergy";
import { formatDate } from "@/utils/formatDate";

interface LaunchCardProps {
  launch: Launch;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export const LaunchCard = ({
  launch,
  isSelected,
  onSelect,
}: LaunchCardProps) => {
  console.log(launch);

  return (
    <button
      onClick={() => onSelect(launch.id)}
      className={`relative cursor-pointer rounded-lg border-2 transition-all duration-200 hover:shadow-lg ${
        isSelected
          ? "border-blue-500 bg-blue-50 shadow-md"
          : "border-gray-200 bg-white hover:border-gray-300"
      }`}
    >
      {/* Selection Indicator */}
      <div className="absolute top-3 right-3">
        <div
          className={`size-6 rounded-full border-2 flex items-center justify-center ${
            isSelected
              ? "bg-blue-500 border-blue-500"
              : "bg-white border-gray-300"
          }`}
        >
          {isSelected && (
            <svg
              className="size-4 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>

      <div className="p-5">
        {/* Mission Patch */}
        <div className="flex items-start gap-4 mb-4">
          {launch.links?.mission_patch_small ? (
            <img
              src={launch.links.mission_patch_small}
              alt={launch.mission_name}
              className="size-16 object-contain rounded"
            />
          ) : (
            <div className="size-16 bg-gray-100 rounded flex items-center justify-center">
              <Rocket className="size-8 text-gray-400" />
            </div>
          )}

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 mb-1">
              {launch.mission_name}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Rocket className="size-4" />
              <span>{launch.rocket?.rocket_name || "Unknown Rocket"}</span>
            </div>
          </div>
        </div>

        {/* Launch Details */}
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="size-4" />
            <span>{formatDate(launch.launch_date_utc)}</span>
          </div>

          <div className="flex items-center gap-2">
            {launch.launch_success ? (
              <>
                <CheckCircle className="size-4 text-green-500" />
                <span className="text-green-700 font-medium">
                  Successful Launch
                </span>
              </>
            ) : launch.launch_success === false ? (
              <>
                <XCircle className="size-4 text-red-500" />
                <span className="text-red-700 font-medium">Failed Launch</span>
              </>
            ) : (
              <>
                <div className="size-4 rounded-full bg-gray-300" />
                <span className="text-gray-600">Status Unknown</span>
              </>
            )}
          </div>

          {/* Energy Estimate */}
          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 text-xs">Est. Energy:</span>
              <span className="text-gray-900 font-semibold">
                {estimateEnergy(launch)} GJ
              </span>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
};
