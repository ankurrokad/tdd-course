/**
 * Converts a title string into a URL-friendly slug
 * - Trims whitespace
 * - Converts to lowercase
 * - Replaces spaces with hyphens
 * - Removes punctuation
 * @param title - Title string to slugify
 * @returns URL-friendly slug string
 */
export function slugify(title: string): string {
  return title
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Remove punctuation
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}

