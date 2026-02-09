/**
 * 문제 제목: 두 배열 합치기
 * 출처: 
 * 난이도: 
 * 문제 링크: 
 * 
 * 문제 설명:
 * 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.
 * 
 * 입력:
 * - 첫 번째 배열의 크기 N(1<=N<=100)
 * - N개의 배열 원소 (오름차순)
 * - 두 번째 배열의 크기 M(1<=M<=100)
 * - M개의 배열 원소 (오름차순)
 * - 각 리스트의 원소는 int형 변수의 크기를 넘지 않음
 * 
 * 출력:
 * 오름차순으로 정렬된 배열
 * 
 * 예제:
 * Input: [1, 3, 5], [2, 3, 6, 7, 9]
 * Output: [1, 2, 3, 3, 5, 6, 7, 9]
 */

/**
 * 시간 복잡도: O(n+m) - 두 배열의 길이만큼만 순회
 * 공간 복잡도: O(n+m) - 결과 배열
 * 
 * 접근 방법:
 * 1. 두 포인터를 사용하여 각 배열의 시작부터 비교
 * 2. 더 작은 값을 결과 배열에 추가
 * 3. 한쪽 배열이 끝나면 나머지 배열의 원소를 모두 추가
 */

export function solution1(arr1, arr2) {
  let answer = [] ;
  let n = arr1.length;
  let m = arr2.length;

  let p1 = 0;
  let p2 = 0;

  while (p1 < n && p2 < m) {
    if(arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1])
      p1++;
    } else {
      answer.push(arr2[p2])
      p2++;
    }
  }

  while (p1 < n) {
    answer.push(arr1[p1])
    p1++;
  }
  while (p2 < m) {
    answer.push(arr2[p2])
    p2++;
  }

  return answer;
}

export function solution2(arr1, arr2) {
  // concat + sort 방식
  // 두 배열을 합친 후 정렬
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

// 기본 export
export const mergeTwoArrays = solution1;

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(mergeTwoArrays([1, 3, 5], [2, 3, 6, 7, 9]));
  // 예상 출력: [1, 2, 3, 3, 5, 6, 7, 9]
}

