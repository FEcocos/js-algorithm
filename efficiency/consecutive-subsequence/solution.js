/**
 * 문제 제목: 연속 부분수열 1
 * 출처: 
 * 난이도: 
 * 문제 링크: 
 * 
 * 문제 설명:
 * N개의 수로 이루어진 수열이 주어집니다.
 * 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
 * 
 * 입력:
 * - 첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다.
 * - 수열의 원소값은 1,000을 넘지 않는 자연수이다.
 * 
 * 출력:
 * 첫째 줄에 경우의 수를 출력한다.
 * 
 * 예제:
 * Input: [1, 2, 1, 3, 1, 1, 1, 2], M = 6
 * Output: 3
 * 
 * 설명:
 * 합이 6이 되는 연속부분수열은 
 * {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
 */

/**
 * 시간 복잡도: O(n) - 투 포인터 사용
 * 공간 복잡도: O(1)
 * 
 * 접근 방법:
 * 1. 투 포인터(슬라이딩 윈도우) 사용
 * 2. sum이 M보다 작으면 right 증가
 * 3. sum이 M보다 크면 left 증가
 * 4. sum이 M과 같으면 count 증가
 */

export function solution1(arr, m) {
  // 투 포인터 (슬라이딩 윈도우) 방식
  let count = 0;
  let left = 0;
  let sum = 0;

  for (let right = 0; right < arr.length; right++) {
    // right 포인터 이동하며 sum에 추가
    sum += arr[right];

    // sum이 m보다 크거나 같으면 left 이동
    while (sum >= m) {
      if (sum === m) {
        count++;
      }
      sum -= arr[left];
      left++;
    }
  }

  return count;
}

export function solution2(arr, m) {
  // 브루트포스 방식 (비효율적 O(n²))
  let count = 0;

  // 모든 시작점에 대해
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    // 각 시작점부터 끝까지 확인
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum === m) {
        count++;
        break; // 이미 찾았으므로 더 이상 확장할 필요 없음
      }
      if (sum > m) {
        break; // 이미 초과했으므로 더 이상 확장할 필요 없음
      }
    }
  }

  return count;
}

// 기본 export
export const countConsecutiveSubsequence = solution1;

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(countConsecutiveSubsequence([1, 2, 1, 3, 1, 1, 1, 2], 6));
  // 예상 출력: 3
}

