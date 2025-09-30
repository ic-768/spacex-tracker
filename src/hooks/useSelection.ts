import { useState } from "react";

/**
 * For managing a list of selected item IDs.
 * Returns state and helper functions to track selection.
 */
export const useSelection = () => {
  const [selection, setSelection] = useState<string[]>([]);

  const onSelect = (id: string) => {
    if (selection.includes(id)) {
      setSelection(selection.filter((i) => i !== id));
    } else {
      setSelection([...selection, id]);
    }
  };

  const isSelected = (id: string) => selection.includes(id);

  return {
    selection,
    setSelection,
    onSelect,
    isSelected,
  };
};
