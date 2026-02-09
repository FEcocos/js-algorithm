/**
 * 문제 제목: 공통원소 구하기
 * 출처: 
 * 난이도: 
 * 문제 링크: 
 * 
 * 문제 설명:
 * A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 
 * 오름차순으로 출력하는 프로그램을 작성하세요.
 * 
 * 입력:
 * - 첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)
 * - 두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
 * - 세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)
 * - 네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
 * - 각 집합의 원소는 1,000,000,000이하의 자연수입니다.
 * 
 * 출력:
 * 두 집합의 공통원소를 오름차순으로 정렬하여 출력합니다.
 * 
 * 예제:
 * Input: [1, 3, 9, 5, 2], [3, 2, 5, 7, 8]
 * Output: [2, 3, 5]
 */

/**
 * 시간 복잡도: O(n+m) - Set 사용
 * 공간 복잡도: O(n) - Set 저장
 * 
 * 접근 방법:
 * 1. Set을 사용하여 효율적으로 공통 원소 찾기
 * 2. 결과를 오름차순으로 정렬
 */

export function solution1(arr1, arr2) {
  // Set을 사용한 방식
  // 1. arr1을 Set으로 만들어서 O(1) 검색 가능하게
  const set1 = new Set(arr1);
  
  // 2. arr2에서 set1에 있는 원소만 필터링
  const common = arr2.filter(x => set1.has(x));
  
  // 3. 결과를 오름차순 정렬
  return common.sort((a, b) => a - b);
}

export function solution2(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if(arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1])
      p1++;
      p2++;
    } else if(arr1[p1] < arr2[p2]) {
      p1++;
    } else if(arr1[p1] > arr2[p2]) {
      p2++;
    }
  }

  return answer
}

// 기본 export
export const findCommonElements = solution1;

// 테스트 케이스
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(findCommonElements([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
  // 예상 출력: [2, 3, 5]
}

