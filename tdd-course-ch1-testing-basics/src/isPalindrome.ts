/**
 * Checks if a string is a palindrome (reads the same forwards and backwards)
 * Case-insensitive and ignores spaces and punctuation
 * @param str - String to check
 * @returns true if the string is a palindrome, false otherwise
 */
export function isPalindrome(str: string): boolean {
  // Normalize: lowercase and remove non-alphanumeric characters
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  if (normalized.length <= 1) {
    return true;
  }

  // Compare first half with reversed second half
  const mid = Math.floor(normalized.length / 2);
  for (let i = 0; i < mid; i++) {
    if (normalized[i] !== normalized[normalized.length - 1 - i]) {
      return false;
    }
  }

  return true;
}

