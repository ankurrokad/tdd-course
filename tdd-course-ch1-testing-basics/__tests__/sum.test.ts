import { sum } from "../src/sum";

describe("sum", () => {
  it("adds two numbers, returns the result", () => {
    expect(sum(2, 3)).toBe(5);
  });
  it("handles negatives", () => {
    expect(sum(-2, 3)).toBe(1);
  });
});
