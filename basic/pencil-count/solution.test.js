import { describe, test, expect } from "vitest";
import { solution } from "./solution.js";

describe("연필 개수", () => {
  test("테스트 케이스 1 - 예제", () => {
    expect(solution(25)).toBe(3);
  });

  test("테스트 케이스 2 - 정확히 1다스", () => {
    expect(solution(12)).toBe(1);
  });

  test("테스트 케이스 3 - 1자루만 필요", () => {
    expect(solution(1)).toBe(1);
  });

  test("테스트 케이스 4 - 정확히 나누어 떨어지는 경우", () => {
    expect(solution(24)).toBe(2);
  });

  test("테스트 케이스 5 - 많은 학생", () => {
    expect(solution(100)).toBe(9);
  });

  test("엣지 케이스 - 최대값", () => {
    expect(solution(1000)).toBe(84);
  });
});

