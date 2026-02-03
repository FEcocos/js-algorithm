import { describe, it, expect } from 'vitest';
import { solution } from './solution.js';

describe('자릿수의 합', () => {
  it('테스트 케이스 1 - 기본 예제', () => {
    const input = [128, 460, 603, 40, 521, 137, 123];
    expect(solution(input)).toBe(137);
  });

  it('테스트 케이스 2 - 자릿수 합이 모두 다른 경우', () => {
    const input = [111, 222, 333, 444];
    expect(solution(input)).toBe(444); // 4+4+4=12
  });

  it('테스트 케이스 3 - 작은 숫자들', () => {
    const input = [5, 14, 23, 32, 41];
    expect(solution(input)).toBe(41); // 4+1=5
  });

  it('테스트 케이스 4 - 자릿수 합이 같은 경우', () => {
    const input = [235, 1234, 325, 523];
    expect(solution(input)).toBe(1234); // 모두 자릿수 합이 10, 가장 큰 수는 1234
  });

  it('테스트 케이스 5 - 한 자리 숫자들', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(solution(input)).toBe(9);
  });

  it('테스트 케이스 6 - 0이 포함된 숫자', () => {
    const input = [100, 200, 101, 1000];
    expect(solution(input)).toBe(200); // 2+0+0=2, 101도 2이지만 200이 더 큼
  });

  it('테스트 케이스 7 - 큰 숫자들', () => {
    const input = [9999999, 1111111, 8888888];
    expect(solution(input)).toBe(9999999); // 9*7=63
  });

  it('테스트 케이스 8 - 같은 자릿수 합, 다른 크기', () => {
    const input = [119, 128, 137, 146, 155];
    expect(solution(input)).toBe(155); // 모두 자릿수 합이 11
  });

  it('테스트 케이스 9 - 최소 개수 (3개)', () => {
    const input = [10, 20, 30];
    expect(solution(input)).toBe(30); // 모두 자릿수 합이 3
  });

  it('테스트 케이스 10 - 다양한 자릿수', () => {
    const input = [99, 999, 9999, 99999];
    expect(solution(input)).toBe(99999); // 9*5=45
  });
});

