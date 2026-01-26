/**
 * 문제 제목: 회문 문자열
 * 출처: 자바스크립트 알고리즘 문제풀이
 * 난이도: 문자열탐색
 * 문제 링크:
 *
 * 문제 설명:
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
 * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 
 * 회문 문자열이 아니면 "NO"를 출력하는 프로그램을 작성하세요.
 * 단 회문을 검사할 때 대소문자를 구분하지 않습니다.
 *
 * 입력:
 * 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
 *
 * 출력:
 * 첫 번째 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.
 *
 * 예제:
 * Input: "gooG"
 * Output: "YES"
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
  let answer = "YES";
  str = str.toLowerCase();

  for (let i = 0; i < str.length / 2; i++) {
    if(str[i] !== str[str.length - i - 1]){
      answer = "NO";
      break;
    }
  }

  return answer;
}

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(solution("gooG")); // 예상 출력: "YES"
  console.log(solution("Moon")); // 예상 출력: "NO"
}

