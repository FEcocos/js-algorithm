import { describe, test, expect } from "vitest";
import { minOfThree } from "./solution.js";

describe("세 수 중 최솟값", () => {
  test("일반적인 경우 1", () => {
    expect(minOfThree(3, 5, 1)).toBe(1);
  });

  test("일반적인 경우 2", () => {
    expect(minOfThree(10, 20, 30)).toBe(10);
  });

  test("음수 포함", () => {
    expect(minOfThree(-5, -10, -3)).toBe(-10);
  });

  test("같은 수가 포함된 경우", () => {
    expect(minOfThree(5, 5, 10)).toBe(5);
  });

  test("모두 같은 수", () => {
    expect(minOfThree(7, 7, 7)).toBe(7);
  });

  test("음수와 양수 혼합", () => {
    expect(minOfThree(-5, 0, 5)).toBe(-5);
  });

  test("0 포함", () => {
    expect(minOfThree(0, -1, 1)).toBe(-1);
  });
});
