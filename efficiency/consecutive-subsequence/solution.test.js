import { describe, test, expect } from "vitest";
import {
  countConsecutiveSubsequence,
  solution1,
  solution2,
} from "./solution.js";

const solutions = [
  { name: "Solution 1 (투 포인터)", fn: solution1 },
  { name: "Solution 2 (브루트포스)", fn: solution2 },
];

describe("연속 부분수열 1", () => {
  test("예제 1: [1, 2, 1, 3, 1, 1, 1, 2], M=6", () => {
    expect(countConsecutiveSubsequence([1, 2, 1, 3, 1, 1, 1, 2], 6)).toBe(3);
  });

  test("합이 되는 경우가 없는 경우", () => {
    expect(countConsecutiveSubsequence([1, 2, 3, 4, 5], 100)).toBe(0);
  });

  test("한 개의 원소로 M이 되는 경우", () => {
    expect(countConsecutiveSubsequence([1, 5, 3, 2, 5], 5)).toBe(2);
  });

  test("전체 배열의 합이 M인 경우", () => {
    expect(countConsecutiveSubsequence([1, 2, 3, 4], 10)).toBe(1);
  });

  test("여러 경우가 있는 경우", () => {
    expect(countConsecutiveSubsequence([1, 1, 1, 1, 1], 2)).toBe(4);
  });

  test("큰 수가 포함된 경우", () => {
    expect(countConsecutiveSubsequence([5, 10, 15, 20], 25)).toBe(2);
  });

  test("M이 0인 경우", () => {
    expect(countConsecutiveSubsequence([1, 2, 3], 0)).toBe(0);
  });

  test("배열이 1개인 경우", () => {
    expect(countConsecutiveSubsequence([5], 5)).toBe(1);
    expect(countConsecutiveSubsequence([5], 3)).toBe(0);
  });
});

describe("모든 솔루션 비교", () => {
  const testCases = [
    { input: [[1, 2, 1, 3, 1, 1, 1, 2], 6], expected: 3 },
    { input: [[1, 2, 3, 4, 5], 100], expected: 0 },
    { input: [[1, 5, 3, 2, 5], 5], expected: 2 },
    { input: [[1, 1, 1, 1, 1], 2], expected: 4 },
  ];

  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ input, expected }, idx) => {
        test(`테스트 케이스 ${idx + 1}`, () => {
          expect(fn(...input)).toBe(expected);
        });
      });
    });
  });
});

