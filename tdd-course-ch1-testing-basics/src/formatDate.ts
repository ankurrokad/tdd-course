/**
 * Formats a Date object or ISO string to YYYY-MM-DD format
 * @param input - Date object or ISO date string
 * @returns Formatted date string in YYYY-MM-DD format
 * @throws Error if the date is invalid
 */
export function formatDate(input: Date | string): string {
  const date = typeof input === "string" ? new Date(input) : input;
  
  if (Number.isNaN(date.getTime())) {
    throw new Error("Invalid date");
  }

  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

