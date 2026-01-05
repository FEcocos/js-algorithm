import { describe, test, expect } from "vitest";
import { solution } from "./solution.js";

describe("가장 작은 수 출력하기", () => {
  test("테스트 케이스 1 - 예제", () => {
    expect(solution([5, 3, 7, 11, 2, 15, 17])).toBe(2);
  });

  test("테스트 케이스 2 - 첫 번째가 최소값", () => {
    expect(solution([1, 10, 20, 30, 40, 50, 60])).toBe(1);
  });

  test("테스트 케이스 3 - 마지막이 최소값", () => {
    expect(solution([100, 90, 80, 70, 60, 50, 40])).toBe(40);
  });

  test("테스트 케이스 4 - 음수 포함", () => {
    expect(solution([5, -3, 7, 11, 2, 15, 17])).toBe(-3);
  });

  test("테스트 케이스 5 - 모두 같은 값", () => {
    expect(solution([5, 5, 5, 5, 5, 5, 5])).toBe(5);
  });

  test("테스트 케이스 6 - 음수만", () => {
    expect(solution([-5, -3, -7, -11, -2, -15, -17])).toBe(-17);
  });
});

