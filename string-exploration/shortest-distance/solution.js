/**
 * 문제 제목: 가장 짧은 문자거리
 * 출처: 자바스크립트 알고리즘 문제풀이
 * 난이도: 문자열탐색
 * 문제 링크:
 *
 * 문제 설명:
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가
 * 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
 *
 * 입력:
 * 첫 번째 줄에 문자열 s와 문자 t가 주어진다.
 * 문자열과 문자는 소문자로만 주어지며, 문자열의 길이는 100을 넘지 않는다.
 *
 * 출력:
 * 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
 *
 * 예제:
 * Input: s = "teachermode", t = "e"
 * Output: [1, 0, 1, 2, 1, 0, 1, 2, 2, 3, 2, 1, 0]
 * 
 * 설명:
 * t e a c h e r m o d e
 * 1 0 1 2 1 0 1 2 2 3 2 (인덱스 0의 e까지 거리)
 *   0 1 2 1 0 1 2 3 4 3 (인덱스 1의 e까지 거리)
 *             0 1 2 3 2 (인덱스 5의 e까지 거리)
 *                     0 (인덱스 10의 e까지 거리)
 * 각 위치에서 가장 가까운 e까지의 최소 거리
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

export function solution(s, t) {
  let answer = [];
  let p = 1000;

  for(let i = 0; i < s.length; i++){
    if(s[i] !== t) {
      p++;
      answer.push(p);
    } else {
      p = 0;
      answer.push(p);
    }
  }

  p = 1000;

  for(let i = s.length - 1; i >= 0; i--){
    if(s[i] !== t) {
      p++;
      answer[i] = Math.min(answer[i], p);
    } else {
      p = 0;
      answer[i] = p;
    }
  }

  return answer;
}

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(solution("teachermode", "e")); 
  // 예상 출력: [1, 0, 1, 2, 1, 0, 1, 2, 2, 3, 2, 1, 0]
}

