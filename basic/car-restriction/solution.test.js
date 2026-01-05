import { describe, test, expect } from "vitest";
import { solution } from "./solution.js";

describe("10부제", () => {
  test("테스트 케이스 1 - 3일", () => {
    expect(solution(3, [25, 23, 11, 47, 53, 17, 33])).toBe(3);
  });

  test("테스트 케이스 2 - 0일 (10일, 20일, 30일)", () => {
    expect(solution(0, [10, 20, 30, 40, 50, 60, 70])).toBe(7);
  });

  test("테스트 케이스 3 - 5일", () => {
    expect(solution(5, [12, 25, 35, 45, 55, 65, 75])).toBe(6);
  });

  test("테스트 케이스 4 - 1일", () => {
    expect(solution(1, [11, 21, 31, 41, 51, 61, 71])).toBe(7);
  });

  test("테스트 케이스 5 - 7일", () => {
    expect(solution(7, [12, 23, 34, 45, 56, 67, 77])).toBe(2);
  });

  test("테스트 케이스 6 - 위반 차량 없음", () => {
    expect(solution(9, [10, 21, 32, 43, 54, 65, 76])).toBe(0);
  });

  test("테스트 케이스 7 - 2일", () => {
    expect(solution(2, [22, 32, 42, 52, 62, 72, 82])).toBe(7);
  });
});

