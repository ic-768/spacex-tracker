import { Button } from "./ui/button";

interface SelectionButtonsProps {
  onClearSelection: () => void;
  onSelectAll: () => void;
}
export const SelectionButtons = ({
  onClearSelection,
  onSelectAll,
}: SelectionButtonsProps) => {
  return (
    <div className="w-full flex justify-center gap-4">
      <Button onClick={onSelectAll}>Select All</Button>
      <Button onClick={onClearSelection} variant="destructive">
        Clear All
      </Button>
    </div>
  );
};
