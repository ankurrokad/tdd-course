import { formatDate } from "../src/formatDate";

describe("formatDate", () => {
  it("formats Date object to YYYY-MM-DD", () => {
    const date = new Date("2024-01-05T12:00:00Z");
    expect(formatDate(date)).toBe("2024-01-05");
  });

  it("accepts ISO string and formats to YYYY-MM-DD", () => {
    expect(formatDate("2025-11-03T00:00:00Z")).toBe("2025-11-03");
  });

  it("handles single digit months and days with padding", () => {
    const date = new Date("2024-01-05T00:00:00Z");
    expect(formatDate(date)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    expect(formatDate(date)).toBe("2024-01-05");
  });

  it("throws error on invalid date string", () => {
    expect(() => formatDate("not a date")).toThrow("Invalid date");
  });

  it("throws error on invalid Date object", () => {
    const invalidDate = new Date("invalid");
    expect(() => formatDate(invalidDate)).toThrow("Invalid date");
  });

  it("handles dates at midnight UTC", () => {
    expect(formatDate("2024-12-25T00:00:00Z")).toBe("2024-12-25");
  });
});

