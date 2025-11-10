import { slugify } from "../src/slugify";

describe("slugify", () => {
  it("converts title to slug format", () => {
    expect(slugify("Hello World")).toBe("hello-world");
    expect(slugify("My Awesome Post")).toBe("my-awesome-post");
  });

  it("trims whitespace from start and end", () => {
    expect(slugify("  Hello World  ")).toBe("hello-world");
    expect(slugify("\tMy Title\n")).toBe("my-title");
  });

  it("converts to lowercase", () => {
    expect(slugify("HELLO WORLD")).toBe("hello-world");
    expect(slugify("MiXeD CaSe")).toBe("mixed-case");
  });

  it("replaces spaces with hyphens", () => {
    expect(slugify("hello world")).toBe("hello-world");
    expect(slugify("a b c d")).toBe("a-b-c-d");
  });

  it("removes punctuation", () => {
    expect(slugify("Hello, World!")).toBe("hello-world");
    expect(slugify("What's Up?")).toBe("whats-up");
  });

  it("handles multiple consecutive spaces", () => {
    expect(slugify("Hello    World")).toBe("hello-world");
    expect(slugify("a  b   c")).toBe("a-b-c");
  });

  it("handles special characters", () => {
    expect(slugify("Hello@World#2024")).toBe("helloworld2024");
    expect(slugify("C++ & JavaScript")).toBe("c-javascript");
  });

  it("handles empty string", () => {
    expect(slugify("")).toBe("");
  });

  it("handles string with only special characters", () => {
    expect(slugify("!!!")).toBe("");
    expect(slugify("   ")).toBe("");
  });

  it("preserves numbers", () => {
    expect(slugify("2024 New Year")).toBe("2024-new-year");
    expect(slugify("Top 10 List")).toBe("top-10-list");
  });
});

