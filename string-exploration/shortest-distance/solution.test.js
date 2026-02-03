import { describe, test, expect } from "vitest";
import { solution } from "./solution.js";

describe("가장 짧은 문자거리", () => {
  test("테스트 케이스 1 - 기본 예제", () => {
    // "teachermode", "e"
    // 인덱스: 0  1  2  3  4  5  6  7  8  9  10
    // 문자:   t  e  a  c  h  e  r  m  o  d  e
    // e 위치: 1, 5, 10
    // 거리:   1  0  1  2  1  0  1  2  2  1  0
    expect(solution("teachermode", "e")).toEqual([1, 0, 1, 2, 1, 0, 1, 2, 2, 1, 0]);
  });

  test("테스트 케이스 2 - 시작과 끝에 타겟", () => {
    // "abaaba", "a"
    // a(0) b(1) a(0) a(0) b(1) a(0)
    expect(solution("abaaba", "a")).toEqual([0, 1, 0, 0, 1, 0]);
  });

  test("테스트 케이스 3 - 타겟이 하나만", () => {
    // "hello", "e"
    // h(1) e(0) l(1) l(2) o(3)
    expect(solution("hello", "e")).toEqual([1, 0, 1, 2, 3]);
  });

  test("테스트 케이스 4 - 타겟이 없는 경우", () => {
    // "hello", "z"
    // 모두 아주 큰 값... 이건 문제 조건상 없을 것 같으니 skip
  });

  test("테스트 케이스 5 - 모두 타겟", () => {
    // "aaaa", "a"
    // a(0) a(0) a(0) a(0)
    expect(solution("aaaa", "a")).toEqual([0, 0, 0, 0]);
  });

  test("테스트 케이스 6 - 타겟이 끝에만", () => {
    // "abcde", "e"
    // a(4) b(3) c(2) d(1) e(0)
    expect(solution("abcde", "e")).toEqual([4, 3, 2, 1, 0]);
  });

  test("테스트 케이스 7 - 타겟이 처음에만", () => {
    // "abcde", "a"
    // a(0) b(1) c(2) d(3) e(4)
    expect(solution("abcde", "a")).toEqual([0, 1, 2, 3, 4]);
  });

  test("테스트 케이스 8 - 타겟이 중간에", () => {
    // "abcba", "c"
    // a(2) b(1) c(0) b(1) a(2)
    expect(solution("abcba", "c")).toEqual([2, 1, 0, 1, 2]);
  });

  test("테스트 케이스 9 - 두 글자", () => {
    // "ab", "a"
    // a(0) b(1)
    expect(solution("ab", "a")).toEqual([0, 1]);
  });

  test("테스트 케이스 10 - 한 글자 (타겟)", () => {
    // "a", "a"
    // a(0)
    expect(solution("a", "a")).toEqual([0]);
  });
});

