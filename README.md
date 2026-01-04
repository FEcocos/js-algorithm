# 🚀 JavaScript 알고리즘 & 코딩테스트

JavaScript로 풀어보는 알고리즘 문제 모음집

## 📁 프로젝트 구조

```
js-algorithm/
├── basic/                   # 기본 문제
│   ├── min-of-three/       # 세 수 중 최솟값
│   │   ├── solution.js
│   │   └── solution.test.js
│   └── triangle-check/     # 삼각형 판별하기
│       ├── solution.js
│       └── solution.test.js
├── template.js             # 문제 풀이 템플릿
├── template.test.js        # 테스트 템플릿
└── vitest.config.js        # 테스트 설정
```

## 🛠 초기 설정

### 1. 패키지 설치

```bash
yarn install
# 또는
yarn
```

## 🧪 테스트 실행 방법

### 방법 1: 모든 테스트 한 번에 실행

```bash
yarn test
```

### 방법 2: Watch 모드 (추천!)

```bash
yarn test:watch
```

- 파일 저장할 때마다 자동으로 테스트 재실행
- 개발하면서 실시간으로 결과 확인 가능

### 방법 3: UI 모드

```bash
yarn test:ui
```

- 브라우저에서 테스트 결과를 시각적으로 확인
- 각 테스트별 상세 정보 제공

### 방법 4: 특정 파일만 테스트

```bash
yarn test min-of-three
```

### 방법 5: 커버리지 확인

```bash
yarn test:coverage
```

## 📝 새 문제 추가하는 방법

### 1단계: 문제 폴더 생성 및 템플릿 복사

```bash
# basic 폴더에 새 문제 폴더 생성
mkdir basic/문제이름

# 템플릿 복사
cp template.js basic/문제이름/solution.js
cp template.test.js basic/문제이름/solution.test.js
```

### 2단계: 문제 정보 작성

`basic/문제이름/solution.js` 파일을 열어서:

- 문제 제목, 출처, 난이도, 링크 작성
- 문제 설명, 입력/출력 예제 작성

### 3단계: 코드 작성

```javascript
export function solution(input) {
  // 여기에 코드 작성
}
```

### 4단계: 테스트 케이스 작성

`basic/문제이름/solution.test.js` 파일에 테스트 케이스 추가

### 5단계: 테스트 실행

```bash
yarn test:watch
```

## 💡 코딩 팁

### 문제 풀이 시

- ✅ 시간 복잡도와 공간 복잡도를 주석으로 남기기
- ✅ 접근 방법을 단계별로 작성하기
- ✅ 엣지 케이스를 고려하기
- ✅ 여러 풀이 방법이 있다면 비교해보기

### 테스트 작성 시

- ✅ 일반적인 경우
- ✅ 엣지 케이스 (빈 배열, 0, 음수 등)
- ✅ 경계값 테스트
- ✅ 예외 상황

## 📊 진행 상황

### Basic

- [x] 세 수 중 최솟값 (min-of-three)

## 📝 문제 출처

- [백준](https://www.acmicpc.net/)
- [프로그래머스](https://programmers.co.kr/)
- [LeetCode](https://leetcode.com/)

## ⚡ 사용 기술

- **JavaScript (ES Modules)**
- **Vitest** - 빠르고 강력한 테스트 프레임워크
- **Yarn** - 패키지 매니저
- **Node.js**

---

📅 시작일: 2026년 1월 4일  
💻 작성자: JiHun
