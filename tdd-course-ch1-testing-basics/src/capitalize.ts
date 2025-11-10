/**
 * Capitalizes the first letter of a string and lowercases the rest
 * @param str - String to capitalize
 * @returns String with first letter capitalized and rest lowercased
 */
export function capitalize(str: string): string {
  if (str.length === 0) {
    return str;
  }

  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

