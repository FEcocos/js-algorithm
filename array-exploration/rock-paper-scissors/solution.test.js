import { describe, test, expect } from "vitest";
import { solution } from "./solution.js";

describe("가위바위보", () => {
  test("테스트 케이스 1 - 기본 예제", () => {
    // 1회: A=2(바위) vs B=1(가위) → A승
    // 2회: A=3(보) vs B=1(가위) → B승
    // 3회: A=3(보) vs B=2(바위) → A승
    // 4회: A=1(가위) vs B=2(바위) → B승
    // 5회: A=3(보) vs B=3(보) → 비김(D)
    expect(solution([2, 3, 3, 1, 3], [1, 1, 2, 2, 3])).toEqual(['A', 'B', 'A', 'B', 'D']);
  });

  test("테스트 케이스 2 - A가 모두 이기는 경우", () => {
    // A=2(바위) > B=1(가위)
    // A=3(보) > B=2(바위)
    // A=1(가위) > B=3(보)
    expect(solution([2, 3, 1], [1, 2, 3])).toEqual(['A', 'A', 'A']);
  });

  test("테스트 케이스 3 - B가 모두 이기는 경우", () => {
    // A=1(가위) < B=2(바위)
    // A=2(바위) < B=3(보)
    // A=3(보) < B=1(가위)
    expect(solution([1, 2, 3], [2, 3, 1])).toEqual(['B', 'B', 'B']);
  });

  test("테스트 케이스 4 - 모두 비기는 경우", () => {
    // A=1(가위) = B=1(가위)
    // A=2(바위) = B=2(바위)
    // A=3(보) = B=3(보)
    expect(solution([1, 2, 3], [1, 2, 3])).toEqual(['D', 'D', 'D']);
  });

  test("테스트 케이스 5 - 복잡한 케이스", () => {
    // 1회: A=1(가위) vs B=2(바위) → B승
    // 2회: A=2(바위) vs B=1(가위) → A승
    // 3회: A=3(보) vs B=3(보) → 비김(D)
    // 4회: A=1(가위) vs B=3(보) → A승
    // 5회: A=2(바위) vs B=3(보) → B승
    // 6회: A=3(보) vs B=2(바위) → A승
    expect(solution([1, 2, 3, 1, 2, 3], [2, 1, 3, 3, 3, 2])).toEqual(['B', 'A', 'D', 'A', 'B', 'A']);
  });

  test("테스트 케이스 6 - 한 번만", () => {
    // A=2(바위) vs B=1(가위) → A승
    expect(solution([2], [1])).toEqual(['A']);
  });

  test("테스트 케이스 7 - 긴 게임", () => {
    // 각각 검증:
    // A=1 vs B=1 → D
    // A=2 vs B=2 → D
    // A=3 vs B=1 → B
    // A=1 vs B=3 → A
    // A=2 vs B=3 → B
    // A=3 vs B=2 → A
    // A=1 vs B=2 → B
    // A=2 vs B=1 → A
    expect(solution([1, 2, 3, 1, 2, 3, 1, 2], [1, 2, 1, 3, 3, 2, 2, 1])).toEqual(['D', 'D', 'B', 'A', 'B', 'A', 'B', 'A']);
  });
});

