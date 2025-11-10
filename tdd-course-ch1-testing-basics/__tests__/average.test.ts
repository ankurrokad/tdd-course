import { average } from "../src/average";

describe("average", () => {
  it("calculates average of positive numbers", () => {
    expect(average([1, 2, 3, 4, 5])).toBe(3);
    expect(average([10, 20, 30])).toBe(20);
  });

  it("calculates average of negative numbers", () => {
    expect(average([-1, -2, -3])).toBe(-2);
    expect(average([-10, -20])).toBe(-15);
  });

  it("handles mixed positive and negative numbers", () => {
    expect(average([-2, 0, 2])).toBe(0);
    expect(average([-5, 5, 10])).toBeCloseTo(3.333, 2);
  });

  it("handles single number", () => {
    expect(average([5])).toBe(5);
    expect(average([-10])).toBe(-10);
  });

  it("handles decimal numbers", () => {
    expect(average([1.5, 2.5, 3.5])).toBeCloseTo(2.5, 5);
    expect(average([0.1, 0.2, 0.3])).toBeCloseTo(0.2, 5);
  });

  it("throws error on empty array", () => {
    expect(() => average([])).toThrow("Cannot calculate average of empty array");
  });

  it("handles zeros", () => {
    expect(average([0, 0, 0])).toBe(0);
    expect(average([0, 5, 10])).toBeCloseTo(5, 5);
  });

  it("handles large numbers", () => {
    expect(average([1000, 2000, 3000])).toBe(2000);
  });
});

