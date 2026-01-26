import { describe, test, expect } from "vitest";
import { solution } from "./solution.js";

describe("회문 문자열", () => {
  test("테스트 케이스 1 - 기본 예제 (대소문자 섞임)", () => {
    // gooG → 소문자로 변환: goog → 회문 O
    expect(solution("gooG")).toBe("YES");
  });

  test("테스트 케이스 2 - 회문이 아닌 경우", () => {
    // Moon → 소문자로 변환: moon → 회문 X
    expect(solution("Moon")).toBe("NO");
  });

  test("테스트 케이스 3 - 완전한 회문 (소문자)", () => {
    // level → 회문 O
    expect(solution("level")).toBe("YES");
  });

  test("테스트 케이스 4 - 완전한 회문 (대문자)", () => {
    // NOON → 소문자로 변환: noon → 회문 O
    expect(solution("NOON")).toBe("YES");
  });

  test("테스트 케이스 5 - 한 글자", () => {
    // a → 회문 O (한 글자는 항상 회문)
    expect(solution("a")).toBe("YES");
  });

  test("테스트 케이스 6 - 두 글자 회문", () => {
    // AA → 소문자로 변환: aa → 회문 O
    expect(solution("AA")).toBe("YES");
  });

  test("테스트 케이스 7 - 두 글자 회문 아님", () => {
    // ab → 회문 X
    expect(solution("ab")).toBe("NO");
  });

  test("테스트 케이스 8 - 긴 회문", () => {
    // Madam → 소문자로 변환: madam → 회문 O
    expect(solution("Madam")).toBe("YES");
  });

  test("테스트 케이스 9 - 대소문자 섞인 회문", () => {
    // RaceCar → 소문자로 변환: racecar → 회문 O
    expect(solution("RaceCar")).toBe("YES");
  });

  test("테스트 케이스 10 - 숫자 포함 회문", () => {
    // 1221 → 회문 O
    expect(solution("1221")).toBe("YES");
  });

  test("테스트 케이스 11 - 홀수 길이 회문", () => {
    // radar → 회문 O
    expect(solution("radar")).toBe("YES");
  });

  test("테스트 케이스 12 - 홀수 길이 회문 아님", () => {
    // hello → 회문 X
    expect(solution("hello")).toBe("NO");
  });
});

