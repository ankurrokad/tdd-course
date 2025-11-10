import { isPalindrome } from "../src/isPalindrome";

describe("isPalindrome", () => {
  it("returns true for simple palindromes", () => {
    expect(isPalindrome("racecar")).toBe(true);
    expect(isPalindrome("level")).toBe(true);
  });

  it("returns false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
    expect(isPalindrome("world")).toBe(false);
  });

  it("handles single character strings", () => {
    expect(isPalindrome("a")).toBe(true);
    expect(isPalindrome("z")).toBe(true);
  });

  it("handles empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("is case-insensitive", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
    expect(isPalindrome("LEVEL")).toBe(true);
    expect(isPalindrome("Hello")).toBe(false);
  });

  it("ignores spaces and punctuation", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
    expect(isPalindrome("race a car")).toBe(false);
  });

  it("handles numbers in string", () => {
    expect(isPalindrome("12321")).toBe(true);
    expect(isPalindrome("12345")).toBe(false);
  });
});

