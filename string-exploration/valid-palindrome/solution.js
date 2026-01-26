/**
 * 문제 제목: 유효한 팰린드롬
 * 출처: 자바스크립트 알고리즘 문제풀이
 * 난이도: 문자열탐색
 * 문제 링크:
 *
 * 문제 설명:
 * 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 "NO"를 출력하는
 * 프로그램을 작성하세요.
 * 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
 * 알파벳 이외의 문자들은 무시합니다.
 *
 * 입력:
 * 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
 *
 * 출력:
 * 첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.
 *
 * 예제:
 * Input: "found7, time: study: Yduts: emit, 7Dnuof"
 * Output: "YES"
 * 
 * 설명: 알파벳만 추출하면 "foundtimestudyYdutsemitDnuof"
 * 소문자로 변환하면 "foundtimestudyydutsemitdnuof" → 회문 O
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
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  if (str.split('').reverse().join('') !== str) answer = "NO";
  
  return answer;
}

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(solution("found7, time: study: Yduts: emit, 7Dnuof")); // 예상 출력: "YES"
}

