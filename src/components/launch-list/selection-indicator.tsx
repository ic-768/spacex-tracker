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
);
