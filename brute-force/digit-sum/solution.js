/**
 * 문제: 자릿수의 합
 *
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고,
 * 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요.
 * 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
 *
 * 입력설명:
 * - 첫 줄에 자연수의 개수 N(3≤N≤100)이 주어지고,
 *   그 다음 줄에 N개의 자연수가 주어진다.
 * - 각 자연수의 크기는 10,000,000를 넘지 않는다.
 *
 * 출력설명:
 * - 자릿수의 합이 최대인 자연수를 출력한다.
 *
 * 입력예제:
 * 7
 * [128, 460, 603, 40, 521, 137, 123]
 *
 * 출력예제:
 * 137
 *
 * 설명:
 * - 128: 1+2+8 = 11
 * - 460: 4+6+0 = 10
 * - 603: 6+0+3 = 9
 * - 40: 4+0 = 4
 * - 521: 5+2+1 = 8
 * - 137: 1+3+7 = 11
 * - 123: 1+2+3 = 6
 *
 * 자릿수의 합이 11로 최대인 숫자는 128과 137인데,
 * 원래 숫자가 더 큰 137을 출력합니다.
 */

export function solution(arr) {
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of arr) {
    // let sum = 0;
    // let tmp = x;

    // while (tmp) {
    //   sum += tmp % 10;
    //   tmp = Math.floor(tmp / 10);
    // }

    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) {
        answer = x;
      }
    }
  }

  return answer;
}
