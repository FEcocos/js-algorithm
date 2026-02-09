import { describe, test, expect } from "vitest";
import { mergeTwoArrays, solution1, solution2 } from "./solution.js";

const solutions = [
  { name: "Solution 1 (투 포인터)", fn: solution1 },
  { name: "Solution 2 (concat + sort)", fn: solution2 },
];

describe("두 배열 합치기", () => {
  test("예제 1", () => {
    expect(mergeTwoArrays([1, 3, 5], [2, 3, 6, 7, 9])).toEqual([
      1, 2, 3, 3, 5, 6, 7, 9,
    ]);
  });

  test("첫 번째 배열이 더 작은 경우", () => {
    expect(mergeTwoArrays([1, 2], [3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("두 번째 배열이 더 작은 경우", () => {
    expect(mergeTwoArrays([5, 6, 7, 8], [1, 2])).toEqual([1, 2, 5, 6, 7, 8]);
  });

  test("중복된 값이 많은 경우", () => {
    expect(mergeTwoArrays([1, 1, 1], [1, 1, 1])).toEqual([1, 1, 1, 1, 1, 1]);
  });

  test("한 배열이 비어있는 경우", () => {
    expect(mergeTwoArrays([], [1, 2, 3])).toEqual([1, 2, 3]);
    expect(mergeTwoArrays([1, 2, 3], [])).toEqual([1, 2, 3]);
  });

  test("두 배열 모두 비어있는 경우", () => {
    expect(mergeTwoArrays([], [])).toEqual([]);
  });

  test("음수 포함", () => {
    expect(mergeTwoArrays([-3, -1, 2], [-2, 0, 3])).toEqual([
      -3, -2, -1, 0, 2, 3,
    ]);
  });
});

describe("모든 솔루션 비교", () => {
  const testCases = [
    {
      input: [[1, 3, 5], [2, 3, 6, 7, 9]],
      expected: [1, 2, 3, 3, 5, 6, 7, 9],
    },
    { input: [[1, 2], [3, 4, 5]], expected: [1, 2, 3, 4, 5] },
    { input: [[5, 6], [1, 2]], expected: [1, 2, 5, 6] },
    { input: [[], [1, 2, 3]], expected: [1, 2, 3] },
  ];

  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ input, expected }, idx) => {
        test(`테스트 케이스 ${idx + 1}`, () => {
          expect(fn(...input)).toEqual(expected);
        });
      });
    });
  });
});

