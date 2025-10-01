import { Check } from "lucide-react";

interface SelectionIndicatorProps {
  isSelected: boolean;
}

export const SelectionIndicator = ({ isSelected }: SelectionIndicatorProps) => (
  <div className="absolute top-3 right-3">
    <div
      className={`size-6 rounded-full border-2 flex items-center justify-center transition-all ${
        isSelected ? "bg-blue-500 border-blue-500" : "bg-white border-gray-300"
      }`}
    >
      {isSelected && <Check className="size-4 text-white" />}
    </div>
  </div>
);
