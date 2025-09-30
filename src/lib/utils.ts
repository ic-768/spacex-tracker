import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to combine and merge Tailwind CSS class names.
 * Wraps two libraries:
 * - `clsx`: handles conditional and dynamic class names.
 * - `twMerge`: intelligently merges Tailwind classes, removing duplicates or conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
