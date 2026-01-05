/**
 * 문제 제목: 가장 작은 수 출력하기
 * 출처: 자바스크립트 알고리즘 문제풀이
 * 난이도: Basic
 * 문제 링크:
 *
 * 문제 설명:
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 *
 * 입력:
 * 첫 번째 줄에 7개의 수가 주어진다.
 *
 * 출력:
 * 첫 번째 줄에 가장 작은 값을 출력한다.
 *
 * 예제:
 * Input: [5, 3, 7, 11, 2, 15, 17]
 * Output: 2
 */

/**
 * 시간 복잡도: O()
 * 공간 복잡도: O()
 *
 * 접근 방법:
 * 1.
 * 2.
 * 3.
 */

export function solution(arr) {
  // let anser = Math.min(...arr);

  // return anser;

  let min = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  return min;
}

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(solution([5, 3, 7, 11, 2, 15, 17])); // 예상 출력: 2
}
