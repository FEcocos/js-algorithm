/**
 * 문제 제목: 1부터 N까지 합 출력하기
 * 출처: 자바스크립트 알고리즘 문제풀이
 * 난이도: Basic
 * 문제 링크:
 *
 * 문제 설명:
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 *
 * 입력:
 * 첫 번째 줄에 200이하의 자연수 N이 입력된다.
 *
 * 출력:
 * 첫 번째 줄에 1부터 N까지의 합을 출력한다.
 *
 * 예제:
 * Input: 6
 * Output: 21
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

export function solution(n) {
  let anser = 0;

  for (let i = 0; i <= n; i++) {
    anser += i;
  }

  return anser;
}

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(solution(6)); // 예상 출력: 21
}
