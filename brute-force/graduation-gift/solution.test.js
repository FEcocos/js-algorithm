import { describe, it, expect } from 'vitest';
import { solution } from './solution.js';

describe('졸업 선물', () => {
  it('테스트 케이스 1 - 기본 예제', () => {
    const budget = 28;
    const gifts = [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
    // 각 상품 비용: 12, 4, 7, 9, 13
    // (10,3)에 쿠폰 사용: 5+3=8
    // (2,2)=4, (4,3)=7, (4,5)=9, (10,3)=8 → 4+7+9+8=28
    expect(solution(budget, gifts)).toBe(4);
  });

  it('테스트 케이스 2 - 1명만 가능', () => {
    const budget = 10;
    const gifts = [[8, 2], [6, 4], [4, 6]];
    // 각 상품 비용: 10, 10, 10
    // (8,2)에 쿠폰: 4+2=6
    // 예산 10으로 6만 살 수 있음 → 1명
    expect(solution(budget, gifts)).toBe(1);
  });

  it('테스트 케이스 3 - 모두 살 수 있는 경우', () => {
    const budget = 30;
    const gifts = [[2, 2], [4, 2], [6, 2]];
    // 각 상품 비용: 4, 6, 8
    // (6,2)에 쿠폰: 3+2=5
    // 4+6+5=15 < 30 → 3명
    expect(solution(budget, gifts)).toBe(3);
  });

  it('테스트 케이스 4 - 쿠폰 효과적 사용', () => {
    const budget = 20;
    const gifts = [[10, 5], [2, 1], [4, 2]];
    // 각 상품 비용: 15, 3, 6
    // (10,5)에 쿠폰: 5+5=10
    // 3+6+10=19 ≤ 20 → 3명
    expect(solution(budget, gifts)).toBe(3);
  });

  it('테스트 케이스 5 - 큰 예산', () => {
    const budget = 100;
    const gifts = [[10, 10], [20, 5], [8, 2]];
    // 각 상품 비용: 20, 25, 10
    // (20,5)에 쿠폰: 10+5=15
    // 10+20+15=45 < 100 → 3명
    expect(solution(budget, gifts)).toBe(3);
  });

  it('테스트 케이스 6 - 쿠폰 없이도 많이 살 수 있는 경우', () => {
    const budget = 50;
    const gifts = [[2, 1], [2, 1], [2, 1], [2, 1], [2, 1]];
    // 모두 3씩
    // (2,1)에 쿠폰: 1+1=2
    // 2+3+3+3+3=14 < 50 → 5명
    expect(solution(budget, gifts)).toBe(5);
  });

  it('테스트 케이스 7 - 쿠폰으로 비싼 것 사기', () => {
    const budget = 15;
    const gifts = [[10, 2], [2, 2], [2, 2]];
    // 각 상품 비용: 12, 4, 4
    // (10,2)에 쿠폰: 5+2=7
    // 4+4+7=15 → 3명
    expect(solution(budget, gifts)).toBe(3);
  });

  it('테스트 케이스 8 - 예산 딱 맞는 경우', () => {
    const budget = 10;
    const gifts = [[4, 2], [2, 2]];
    // 각 상품 비용: 6, 4
    // (4,2)에 쿠폰: 2+2=4
    // 4+4=8 < 10 → 2명
    expect(solution(budget, gifts)).toBe(2);
  });

  it('테스트 케이스 9 - 2명 중 1명', () => {
    const budget = 5;
    const gifts = [[4, 2], [6, 4]];
    // 각 상품 비용: 6, 10
    // (4,2)에 쿠폰: 2+2=4 ≤ 5 → 1명
    expect(solution(budget, gifts)).toBe(1);
  });

  it('테스트 케이스 10 - 쿠폰 사용 위치가 중요한 경우', () => {
    const budget = 25;
    const gifts = [[10, 3], [6, 2], [4, 1], [8, 4]];
    // 각 상품 비용: 13, 8, 5, 12
    // 정렬: 5, 8, 12, 13
    // (10,3)에 쿠폰: 5+3=8
    // 5+8+8=21 < 25 → 3명
    expect(solution(budget, gifts)).toBe(3);
  });
});

