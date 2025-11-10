import { capitalize } from "../src/capitalize";

describe("capitalize", () => {
  it("capitalizes first letter of a word", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("world")).toBe("World");
  });

  it("handles empty string", () => {
    expect(capitalize("")).toBe("");
  });

  it("handles single character", () => {
    expect(capitalize("a")).toBe("A");
    expect(capitalize("Z")).toBe("Z");
  });

  it("does not change already capitalized strings", () => {
    expect(capitalize("Hello")).toBe("Hello");
    expect(capitalize("WORLD")).toBe("World");
  });

  it("handles strings starting with numbers", () => {
    expect(capitalize("123abc")).toBe("123abc");
  });

  it("handles strings starting with special characters", () => {
    expect(capitalize("!hello")).toBe("!hello");
    expect(capitalize("@world")).toBe("@world");
  });

  it("only capitalizes first letter, lowercases the rest", () => {
    expect(capitalize("hELLO")).toBe("Hello");
    expect(capitalize("wORLD")).toBe("World");
  });

  it("handles strings with spaces", () => {
    expect(capitalize("hello world")).toBe("Hello world");
  });
});

