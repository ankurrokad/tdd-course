/**
 * Calculates the average of an array of numbers
 * @param numbers - Array of numbers to average
 * @returns The average of all numbers in the array
 * @throws Error if the array is empty
 */
export function average(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error("Cannot calculate average of empty array");
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

