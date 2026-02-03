import { describe, test, expect } from "vitest";
import { solution } from "./solution.js";

describe("숫자만 추출", () => {
  test("테스트 케이스 1 - 기본 예제", () => {
    // "g0en2T0s8eSoft" → 0, 2, 0, 8 → 208
    expect(solution("g0en2T0s8eSoft")).toBe(208);
  });

  test("테스트 케이스 2 - 문제 설명 예제", () => {
    // "tge0a1h205er" → 0, 1, 2, 0, 5 → 1205
    expect(solution("tge0a1h205er")).toBe(1205);
  });

  test("테스트 케이스 3 - 앞에 0이 여러 개", () => {
    // "abc000123def" → 0, 0, 0, 1, 2, 3 → 123
    expect(solution("abc000123def")).toBe(123);
  });

  test("테스트 케이스 4 - 숫자만 있는 경우", () => {
    // "12345" → 12345
    expect(solution("12345")).toBe(12345);
  });

  test("테스트 케이스 5 - 0으로만 구성", () => {
    // "a0b0c0" → 0, 0, 0 → 0
    expect(solution("a0b0c0")).toBe(0);
  });

  test("테스트 케이스 6 - 한 자리 숫자", () => {
    // "abc5def" → 5
    expect(solution("abc5def")).toBe(5);
  });

  test("테스트 케이스 7 - 큰 숫자", () => {
    // "a1b2c3d4e5f6g7h8i9" → 123456789
    expect(solution("a1b2c3d4e5f6g7h8i9")).toBe(123456789);
  });

  test("테스트 케이스 8 - 특수문자 포함", () => {
    // "!@#1$%2^&3*4" → 1, 2, 3, 4 → 1234
    expect(solution("!@#1$%2^&3*4")).toBe(1234);
  });

  test("테스트 케이스 9 - 연속된 숫자", () => {
    // "abc999def" → 9, 9, 9 → 999
    expect(solution("abc999def")).toBe(999);
  });

  test("테스트 케이스 10 - 앞뒤 문자", () => {
    // "hello123world456" → 1, 2, 3, 4, 5, 6 → 123456
    expect(solution("hello123world456")).toBe(123456);
  });

  test("테스트 케이스 11 - 0으로 시작하는 숫자", () => {
    // "test0042" → 0, 0, 4, 2 → 42
    expect(solution("test0042")).toBe(42);
  });
});

