/**
 * 문제: 뒤집은 소수
 *
 * N개의 자연수가 입력되면 각 자연수를 뒤집은 후
 * 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요.
 * 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다.
 * 단 910을 뒤집으면 19로 숫자화해야 한다. 첫 자리부터의 연속된 0은 무시한다.
 *
 * 입력설명:
 * - 첫 줄에 자연수의 개수 N(3≤N≤100)이 주어지고,
 *   그 다음 줄에 N개의 자연수가 주어진다.
 * - 각 자연수의 크기는 100,000을 넘지 않는다.
 *
 * 출력설명:
 * - 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
 *
 * 입력예제:
 * [32, 55, 62, 20, 250, 370, 200, 30, 100]
 *
 * 출력예제:
 * [23, 2, 73, 2, 3]
 *
 * 설명:
 * - 32 → 23 (소수 ✓)
 * - 55 → 55 (소수 아님, 5×11)
 * - 62 → 26 (소수 아님, 2×13)
 * - 20 → 2 (소수 ✓)
 * - 250 → 52 (소수 아님, 4×13)
 * - 370 → 73 (소수 ✓)
 * - 200 → 2 (소수 ✓)
 * - 30 → 3 (소수 ✓)
 * - 100 → 1 (소수 아님)
 */

const isPrime = (number) => {
  if (number === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(number)); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export function solution(arr) {
  let answer = [];

  for (let x of arr) {
    let result = x.toString().split("").reverse().join("");
    result = Number(result);
    // while (x) {
    //   let t = x % 10;
    //   result = result * 10 + t;
    //   x = parseInt(x / 10);
    // }

    if (isPrime(result)) answer.push(result);
  }

  return answer;
}
