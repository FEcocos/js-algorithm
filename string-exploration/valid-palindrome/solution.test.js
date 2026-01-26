import { describe, test, expect } from "vitest";
import { solution } from "./solution.js";

describe("유효한 팰린드롬", () => {
  test("테스트 케이스 1 - 기본 예제", () => {
    // "found7, time: study: Yduts: emit, 7Dnuof"
    // 알파벳만: foundtimestudyYdutsemitDnuof
    // 소문자: foundtimestudyydutsemitdnuof → 회문 O
    expect(solution("found7, time: study: Yduts: emit, 7Dnuof")).toBe("YES");
  });

  test("테스트 케이스 2 - 숫자와 특수문자 포함", () => {
    // "A man, a plan, a canal: Panama"
    // 알파벳만: AmanaplanacanalPanama
    // 소문자: amanaplanacanalpanama → 회문 O
    expect(solution("A man, a plan, a canal: Panama")).toBe("YES");
  });

  test("테스트 케이스 3 - 회문 아님", () => {
    // "race a car"
    // 알파벳만: raceacar
    // 소문자: raceacar → 회문 X
    expect(solution("race a car")).toBe("NO");
  });

  test("테스트 케이스 4 - 특수문자만", () => {
    // ".,!@#"
    // 알파벳만: (없음) → 빈 문자열은 회문 O
    expect(solution(".,!@#")).toBe("YES");
  });

  test("테스트 케이스 5 - 한 글자", () => {
    // "a"
    // 알파벳만: a → 회문 O
    expect(solution("a")).toBe("YES");
  });

  test("테스트 케이스 6 - 숫자 섞인 회문", () => {
    // "ab1ba"
    // 알파벳만: abba
    // 소문자: abba → 회문 O
    expect(solution("ab1ba")).toBe("YES");
  });

  test("테스트 케이스 7 - 대문자만", () => {
    // "A1B2C2B1A"
    // 알파벳만: ABCCBA
    // 소문자: abccba → 회문 O
    expect(solution("A1B2C2B1A")).toBe("YES");
  });

  test("테스트 케이스 8 - 공백 포함 회문 아님", () => {
    // "hello world"
    // 알파벳만: helloworld
    // 소문자: helloworld → 회문 X
    expect(solution("hello world")).toBe("NO");
  });

  test("테스트 케이스 9 - 특수문자 많이 포함", () => {
    // "r@a!c#e$c%a^r"
    // 알파벳만: racecar
    // 소문자: racecar → 회문 O
    expect(solution("r@a!c#e$c%a^r")).toBe("YES");
  });

  test("테스트 케이스 10 - 숫자만", () => {
    // "12321"
    // 알파벳만: (없음) → 빈 문자열은 회문 O
    expect(solution("12321")).toBe("YES");
  });

  test("테스트 케이스 11 - 대소문자 섞인 회문", () => {
    // "No 'x' in Nixon"
    // 알파벳만: NoxinNixon
    // 소문자: noxinnixon → 회문 O
    expect(solution("No 'x' in Nixon")).toBe("YES");
  });

  test("테스트 케이스 12 - 짧은 회문", () => {
    // "a!a"
    // 알파벳만: aa
    // 소문자: aa → 회문 O
    expect(solution("a!a")).toBe("YES");
  });
});

