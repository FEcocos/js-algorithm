import { describe, it, expect } from 'vitest';
import { solution } from './solution.js';

describe('뒤집은 소수', () => {
  it('테스트 케이스 1 - 기본 예제', () => {
    const input = [32, 55, 62, 20, 250, 370, 200, 30, 100];
    expect(solution(input)).toEqual([23, 2, 73, 2, 3]);
  });

  it('테스트 케이스 2 - 모두 소수인 경우', () => {
    const input = [11, 13, 17];
    expect(solution(input)).toEqual([11, 31, 71]);
  });

  it('테스트 케이스 3 - 뒤집어서 작은 소수가 되는 경우', () => {
    const input = [10, 20, 30];
    expect(solution(input)).toEqual([2, 3]); // 10→1(소수아님), 20→2(소수), 30→3(소수)
  });

  it('테스트 케이스 4 - 한 자리 소수', () => {
    const input = [2, 3, 5, 7];
    expect(solution(input)).toEqual([2, 3, 5, 7]);
  });

  it('테스트 케이스 5 - 한 자리 소수 아닌 경우', () => {
    const input = [1, 4, 6, 8, 9];
    expect(solution(input)).toEqual([]);
  });

  it('테스트 케이스 6 - 0이 포함된 숫자', () => {
    const input = [910, 120, 103, 700];
    expect(solution(input)).toEqual([19, 7]); // 910→19(소수), 120→21(소수아님), 103→301(소수아님), 700→7(소수)
  });

  it('테스트 케이스 7 - 큰 소수', () => {
    const input = [197, 199];
    expect(solution(input)).toEqual([991]); // 197→791(소수아님), 199→991(소수)
  });

  it('테스트 케이스 8 - 최소 개수 (3개)', () => {
    const input = [11, 22, 33];
    expect(solution(input)).toEqual([11]);
  });

  it('테스트 케이스 9 - 다양한 경우', () => {
    const input = [97, 98, 99, 100, 101];
    expect(solution(input)).toEqual([79, 89, 101]); // 97→79(소수), 98→89(소수), 99→99(소수아님), 100→1(소수아님), 101→101(소수)
  });

  it('테스트 케이스 10 - 100 이하 숫자들', () => {
    const input = [23, 29, 31, 37];
    expect(solution(input)).toEqual([13, 73]); // 23→32(소수아님), 29→92(소수아님), 31→13(소수), 37→73(소수)
  });
});

