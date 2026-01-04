/**
 * 문제 제목: 세 수 중 최솟값
 * 출처:
 * 난이도:
 * 문제 링크:
 *
 * 문제 설명:
 * 세 개의 정수를 입력받아 그 중 최솟값을 반환합니다.
 *
 * 입력:
 * 세 개의 정수 a, b, c
 *
 * 출력:
 * 세 수 중 최솟값
 *
 * 예제:
 * Input: 3, 5, 1
 * Output: 1
 */

/**
 * 시간 복잡도: O(1)
 * 공간 복잡도: O(1)
 *
 * 접근 방법:
 * 1. 세 수를 비교하여 최솟값을 찾는다
 * 2. Math.min() 함수를 사용하거나 직접 비교
 */

export function minOfThree(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;
  return answer;
}

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(minOfThree(3, 5, 1)); // 예상 출력: 1
  console.log(minOfThree(10, 20, 30)); // 예상 출력: 10
  console.log(minOfThree(-5, -10, -3)); // 예상 출력: -10
}
