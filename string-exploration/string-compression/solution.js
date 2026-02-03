/**
 * 문제 제목: 문자열 압축
 * 출처: 자바스크립트 알고리즘 문제풀이
 * 난이도: 문자열탐색
 * 문제 링크:
 *
 * 문제 설명:
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
 * 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는
 * 프로그램을 작성하시오.
 * 단 반복횟수가 1인 경우 생략합니다.
 *
 * 입력:
 * 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
 *
 * 출력:
 * 첫 줄에 압축된 문자열을 출력한다.
 *
 * 예제:
 * Input: "KKHSSSSSSSE"
 * Output: "K2HS7E"
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

export function solution(str) {
  let answer = '';
  let count = 1;
  str = str + ' ';

  for(let i = 0; i < str.length - 1; i++){
    if(str[i] === str[i + 1]) {
      count++;
    } else {
      answer += str[i];
      if(count > 1) answer += String(count);
      count = 1;
    }
  }

  return answer;
}

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(solution("KKHSSSSSSSE")); // 예상 출력: "K2HS7E"
}

