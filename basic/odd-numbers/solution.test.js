import { describe, test, expect } from "vitest";
import { solution } from "./solution.js";

describe("홀수", () => {
  test("테스트 케이스 1 - 예제", () => {
    expect(solution([12, 77, 38, 41, 53, 92, 85])).toEqual([256, 41]);
  });

  test("테스트 케이스 2 - 모두 홀수", () => {
    expect(solution([1, 3, 5, 7, 9, 11, 13])).toEqual([49, 1]);
  });

  test("테스트 케이스 3 - 홀수가 하나만", () => {
    expect(solution([2, 4, 5, 6, 8, 10, 12])).toEqual([5, 5]);
  });

  test("테스트 케이스 4 - 큰 홀수들", () => {
    expect(solution([100, 99, 88, 77, 66, 55, 44])).toEqual([231, 55]);
  });

  test("테스트 케이스 5 - 작은 홀수들", () => {
    expect(solution([1, 2, 3, 4, 5, 6, 7])).toEqual([16, 1]);
  });

  test("테스트 케이스 6 - 홀수가 섞여있는 경우", () => {
    expect(solution([10, 15, 20, 25, 30, 35, 40])).toEqual([75, 15]);
  });
});

