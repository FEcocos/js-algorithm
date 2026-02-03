import { describe, test, expect } from "vitest";
import { solution } from "./solution.js";

describe("문자열 압축", () => {
  test("테스트 케이스 1 - 기본 예제", () => {
    // "KKHSSSSSSSE" → K2HS7E
    // K(2번) K H(1번) S(7번) E(1번)
    expect(solution("KKHSSSSSSSE")).toBe("K2HS7E");
  });

  test("테스트 케이스 2 - 모두 다른 문자", () => {
    // "ABCDEF" → ABCDEF (반복 없음)
    expect(solution("ABCDEF")).toBe("ABCDEF");
  });

  test("테스트 케이스 3 - 모두 같은 문자", () => {
    // "AAAAA" → A5
    expect(solution("AAAAA")).toBe("A5");
  });

  test("테스트 케이스 4 - 반복과 단일 섞임", () => {
    // "AAABBBCC" → A3B3C2
    expect(solution("AAABBBCC")).toBe("A3B3C2");
  });

  test("테스트 케이스 5 - 한 글자", () => {
    // "A" → A
    expect(solution("A")).toBe("A");
  });

  test("테스트 케이스 6 - 두 글자 반복", () => {
    // "AA" → A2
    expect(solution("AA")).toBe("A2");
  });

  test("테스트 케이스 7 - 긴 반복", () => {
    // "AAAAAAAAAA" (10개) → A10
    expect(solution("AAAAAAAAAA")).toBe("A10");
  });

  test("테스트 케이스 8 - 복잡한 패턴", () => {
    // "AABBCCDDAABBCC" → A2B2C2D2A2B2C2
    expect(solution("AABBCCDDAABBCC")).toBe("A2B2C2D2A2B2C2");
  });

  test("테스트 케이스 9 - 단일 문자 사이에 반복", () => {
    // "ABBBCDDDD" → AB3CD4
    expect(solution("ABBBCDDDD")).toBe("AB3CD4");
  });

  test("테스트 케이스 10 - 반복 후 단일", () => {
    // "AAAB" → A3B
    expect(solution("AAAB")).toBe("A3B");
  });

  test("테스트 케이스 11 - 단일 후 반복", () => {
    // "ABBB" → AB3
    expect(solution("ABBB")).toBe("AB3");
  });

  test("테스트 케이스 12 - 교차 패턴", () => {
    // "AABBAABB" → A2B2A2B2
    expect(solution("AABBAABB")).toBe("A2B2A2B2");
  });
});

