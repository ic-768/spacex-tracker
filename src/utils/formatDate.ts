/**
 * Converts a UTC date string into "MMM DD, YYYY" format (e.g., "Sep 30, 2025").
 *
 * Example:
 * formatDate("2025-09-30T12:00:00Z"); -> "Sep 30, 2025"
 */
export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
