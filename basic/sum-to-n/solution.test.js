import { describe, test, expect } from "vitest";
import { solution } from "./solution.js";

describe("1부터 N까지 합 출력하기", () => {
  test("테스트 케이스 1 - 예제", () => {
    expect(solution(6)).toBe(21);
  });

  test("테스트 케이스 2 - 최소값", () => {
    expect(solution(1)).toBe(1);
  });

  test("테스트 케이스 3 - 10", () => {
    expect(solution(10)).toBe(55);
  });

  test("테스트 케이스 4 - 100", () => {
    expect(solution(100)).toBe(5050);
  });

  test("테스트 케이스 5 - 50", () => {
    expect(solution(50)).toBe(1275);
  });

  test("엣지 케이스 - 최대값", () => {
    expect(solution(200)).toBe(20100);
  });
});

