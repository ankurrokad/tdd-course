import { formatCurrency } from "../src/formatCurrency";

describe("formatCurrency", () => {
  it("formats USD currency by default", () => {
    expect(formatCurrency(1234.56)).toBe("$1,234.56");
    expect(formatCurrency(100)).toBe("$100.00");
  });

  it("formats with custom locale", () => {
    expect(formatCurrency(1234.56, "en-GB", "GBP")).toMatch(/£1,234.56/);
    expect(formatCurrency(1234.56, "de-DE", "EUR")).toMatch(/1.234,56/);
  });

  it("handles zero", () => {
    expect(formatCurrency(0)).toBe("$0.00");
  });

  it("handles negative numbers", () => {
    expect(formatCurrency(-100)).toBe("-$100.00");
    expect(formatCurrency(-1234.56)).toBe("-$1,234.56");
  });

  it("handles large numbers with thousands separators", () => {
    expect(formatCurrency(1000000)).toBe("$1,000,000.00");
    expect(formatCurrency(1234567.89)).toBe("$1,234,567.89");
  });

  it("handles small decimal numbers", () => {
    expect(formatCurrency(0.99)).toBe("$0.99");
    expect(formatCurrency(0.01)).toBe("$0.01");
  });

  it("rounds to 2 decimal places", () => {
    expect(formatCurrency(10.999)).toBe("$11.00");
    expect(formatCurrency(10.994)).toBe("$10.99");
  });

  it("handles different currency codes", () => {
    expect(formatCurrency(100, "en-US", "EUR")).toContain("100.00");
    expect(formatCurrency(100, "en-US", "JPY")).toContain("100");
  });

  it("handles integer amounts", () => {
    expect(formatCurrency(100)).toBe("$100.00");
    expect(formatCurrency(5000)).toBe("$5,000.00");
  });
});

