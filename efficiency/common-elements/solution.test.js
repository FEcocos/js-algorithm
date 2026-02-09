import { describe, test, expect } from "vitest";
import { findCommonElements, solution1, solution2 } from "./solution.js";

const solutions = [
  { name: "Solution 1 (Set)", fn: solution1 },
  { name: "Solution 2 (정렬 + 투 포인터)", fn: solution2 },
];

describe("공통원소 구하기", () => {
  test("예제 1", () => {
    expect(findCommonElements([1, 3, 9, 5, 2], [3, 2, 5, 7, 8])).toEqual([
      2, 3, 5,
    ]);
  });

  test("공통 원소가 없는 경우", () => {
    expect(findCommonElements([1, 2, 3], [4, 5, 6])).toEqual([]);
  });

  test("모든 원소가 공통인 경우", () => {
    expect(findCommonElements([1, 2, 3], [1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("하나만 공통인 경우", () => {
    expect(findCommonElements([1, 2, 3, 4], [4, 5, 6])).toEqual([4]);
  });

  test("큰 숫자 포함", () => {
    expect(
      findCommonElements([100, 200, 300, 400], [300, 400, 500])
    ).toEqual([300, 400]);
  });

  test("정렬되지 않은 입력", () => {
    expect(findCommonElements([9, 1, 5, 3], [3, 7, 1, 9])).toEqual([1, 3, 9]);
  });

  test("한 배열이 훨씬 큰 경우", () => {
    expect(
      findCommonElements([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 5, 8])
    ).toEqual([2, 5, 8]);
  });
});

describe("모든 솔루션 비교", () => {
  const testCases = [
    { input: [[1, 3, 9, 5, 2], [3, 2, 5, 7, 8]], expected: [2, 3, 5] },
    { input: [[1, 2, 3], [4, 5, 6]], expected: [] },
    { input: [[1, 2, 3], [1, 2, 3]], expected: [1, 2, 3] },
    { input: [[9, 1, 5, 3], [3, 7, 1, 9]], expected: [1, 3, 9] },
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

