/**
 * 문제 제목: 큰 수 출력하기
 * 출처: 자바스크립트 알고리즘 문제풀이
 * 난이도: 배열탐색
 * 문제 링크:
 *
 * 문제 설명:
 * N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는
 * 프로그램을 작성하세요(첫 번째 수는 무조건 출력한다)
 *
 * 입력:
 * 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
 *
 * 출력:
 * 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
 *
 * 예제:
 * Input: [7, 3, 9, 5, 6, 12]
 * Output: [7, 9, 6, 12]
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
  let answer = [];

  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if(arr[i] > arr[i-1]) answer.push(arr[i]);
  }
  
  return answer;
}

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(solution([7, 3, 9, 5, 6, 12])); // 예상 출력: [7, 9, 6, 12]
}

