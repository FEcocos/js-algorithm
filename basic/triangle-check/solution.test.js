import { describe, test, expect } from "vitest";
import {
  triangleCheck,
  solution1,
  solution2,
  solution3,
  solution4,
} from "./solution.js";

const solutions = [
  { name: "Solution 1 (직접 비교)", fn: solution1 },
  { name: "Solution 2 (Math.max)", fn: solution2 },
];

describe("삼각형 판별하기", () => {
  test("예제 1: 6, 7, 11 - 삼각형 가능", () => {
    expect(triangleCheck(6, 7, 11)).toBe("YES");
  });

  test("삼각형 가능한 경우 - 직각삼각형", () => {
    expect(triangleCheck(3, 4, 5)).toBe("YES");
  });

  test("삼각형 가능한 경우 - 일반", () => {
    expect(triangleCheck(5, 6, 7)).toBe("YES");
  });

  test("삼각형 불가능한 경우 - 한 변이 너무 김", () => {
    expect(triangleCheck(13, 33, 17)).toBe("NO");
  });

  test("삼각형 불가능한 경우 - 일직선", () => {
    expect(triangleCheck(1, 2, 3)).toBe("NO");
  });

  test("삼각형 가능한 경우 - 작은 수", () => {
    expect(triangleCheck(2, 2, 3)).toBe("YES");
  });

  test("삼각형 불가능한 경우 - 한 변이 합과 같음", () => {
    expect(triangleCheck(5, 5, 10)).toBe("NO");
  });

  test("삼각형 가능한 경우 - 큰 수", () => {
    expect(triangleCheck(90, 80, 70)).toBe("YES");
  });
});

describe("모든 솔루션 비교", () => {
  const testCases = [
    { input: [6, 7, 11], expected: "YES" },
    { input: [3, 4, 5], expected: "YES" },
    { input: [13, 33, 17], expected: "NO" },
    { input: [1, 2, 3], expected: "NO" },
    { input: [5, 5, 10], expected: "NO" },
  ];

  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ input, expected }) => {
        test(`${input.join(", ")} → ${expected}`, () => {
          expect(fn(...input)).toBe(expected);
        });
      });
    });
  });
});
