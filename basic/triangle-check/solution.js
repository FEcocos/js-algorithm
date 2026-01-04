/**
 * 문제 제목: 삼각형 판별하기
 * 출처:
 * 난이도: Basic
 * 문제 링크:
 *
 * 문제 설명:
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면
 * 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력하고,
 * 만들 수 없으면 "NO"를 출력한다.
 *
 * 삼각형 성립 조건:
 * 세 변의 길이 중 가장 긴 변의 길이가 나머지 두 변의 길이의 합보다 작아야 한다.
 * 즉, a + b > c, b + c > a, c + a > b 모두 만족해야 함.
 *
 * 입력:
 * 100 이하의 서로 다른 A, B, C 막대의 길이
 *
 * 출력:
 * "YES" 또는 "NO"
 *
 * 예제:
 * Input: 6, 7, 11
 * Output: "YES"
 */

/**
 * 시간 복잡도: O(1)
 * 공간 복잡도: O(1)
 *
 * 접근 방법:
 * 1. 세 변을 배열에 넣고 정렬
 * 2. 가장 큰 변 < 나머지 두 변의 합인지 확인
 * 3. 조건을 만족하면 "YES", 아니면 "NO" 반환
 */

export function solution1(a, b, c) {
  let answer = "YES";
  let max;
  let sum = a + b + c;

  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = "NO";

  return answer;
}

export function solution2(a, b, c) {
  const max = Math.max(a, b, c);
  const sum = a + b + c;
  return sum - max > max ? "YES" : "NO";
}

export const triangleCheck = solution2;

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(triangleCheck(6, 7, 11)); // 예상 출력: "YES"
  console.log(triangleCheck(13, 33, 17)); // 예상 출력: "NO"
  console.log(triangleCheck(3, 4, 5)); // 예상 출력: "YES"
}
