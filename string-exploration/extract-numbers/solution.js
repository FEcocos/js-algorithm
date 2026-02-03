/**
 * 문제 제목: 숫자만 추출
 * 출처: 자바스크립트 알고리즘 문제풀이
 * 난이도: 문자열탐색
 * 문제 링크:
 *
 * 문제 설명:
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여
 * 그 순서대로 자연수를 만듭니다.
 * 
 * 만약 "tge0a1h205er"에서 숫자만 추출하면 0, 1, 2, 0, 5이고
 * 이것을 자연수를 만들면 1205이 됩니다.
 * 
 * 추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.
 *
 * 입력:
 * 첫 줄에 숫자가 섞인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.
 *
 * 출력:
 * 첫 줄에 자연수를 출력합니다.
 *
 * 예제:
 * Input: "g0en2T0s8eSoft"
 * Output: 208
 * (0, 2, 0, 8 → 자연수 208)
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

  for(let x of str) {
    if(!isNaN(x)) answer += x;
  }

  return parseInt(answer);
}

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(solution("g0en2T0s8eSoft")); // 예상 출력: 208
  console.log(solution("tge0a1h205er")); // 예상 출력: 1205
}

