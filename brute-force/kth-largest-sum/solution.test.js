import { describe, it, expect } from 'vitest';
import { solution } from './solution.js';

describe('K번째 큰 수', () => {
  it('테스트 케이스 1 - 기본 예제', () => {
    const n = 10;
    const k = 3;
    const cards = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
    // 가장 큰 3개 합: 65+45+42=152, 65+45+34=144, 65+45+33=143
    expect(solution(n, k, cards)).toBe(143);
  });

  it('테스트 케이스 2 - 최소 케이스 (3장)', () => {
    const n = 3;
    const k = 1;
    const cards = [1, 2, 3];
    // 3장 조합: (1,2,3)=6
    // 1번째 큰 수는 6
    expect(solution(n, k, cards)).toBe(6);
  });

  it('테스트 케이스 3 - 4장 중 3장', () => {
    const n = 4;
    const k = 1;
    const cards = [1, 2, 3, 4];
    // 조합: (1,2,3)=6, (1,2,4)=7, (1,3,4)=8, (2,3,4)=9
    // 1번째 큰 수는 9
    expect(solution(n, k, cards)).toBe(9);
  });

  it('테스트 케이스 4 - K번째가 존재하지 않는 경우', () => {
    const n = 3;
    const k = 5;
    const cards = [1, 2, 3];
    // 3장 조합은 1개만: (1,2,3)=6
    // 5번째는 없으므로 -1
    expect(solution(n, k, cards)).toBe(-1);
  });

  it('테스트 케이스 5 - 중복 값이 있는 경우', () => {
    const n = 4;
    const k = 2;
    const cards = [1, 1, 2, 2];
    // 조합: (1,1,2)=4, (1,2,2)=5
    // 중복 제거 후: 5, 4
    // 2번째 큰 수는 4
    expect(solution(n, k, cards)).toBe(4);
  });

  it('테스트 케이스 6 - 5장 중 3장', () => {
    const n = 5;
    const k = 3;
    const cards = [10, 20, 30, 40, 50];
    // 모든 조합의 합 (중복 제거 후 내림차순):
    // 120, 110, 100, 90, 80, 70, 60
    // 3번째 큰 수는 100
    expect(solution(n, k, cards)).toBe(100);
  });

  it('테스트 케이스 7 - 같은 합이 여러 개', () => {
    const n = 4;
    const k = 1;
    const cards = [5, 5, 5, 5];
    // 모든 조합: (5,5,5)=15
    // 1번째 큰 수는 15
    expect(solution(n, k, cards)).toBe(15);
  });

  it('테스트 케이스 8 - K가 마지막', () => {
    const n = 4;
    const k = 4;
    const cards = [1, 2, 3, 4];
    // 조합: 9, 8, 7, 6
    // 4번째 큰 수는 6
    expect(solution(n, k, cards)).toBe(6);
  });

  it('테스트 케이스 9 - 큰 숫자들', () => {
    const n = 5;
    const k = 1;
    const cards = [90, 91, 92, 93, 94];
    // 가장 큰 조합: 92+93+94=279
    expect(solution(n, k, cards)).toBe(279);
  });

  it('테스트 케이스 10 - 중간 K값', () => {
    const n = 5;
    const k = 5;
    const cards = [1, 2, 3, 4, 5];
    // 모든 조합 (중복 제거 후 내림차순): 12, 11, 10, 9, 8, 7, 6
    // 5번째 큰 수는 8
    expect(solution(n, k, cards)).toBe(8);
  });
});

