# 코딩 컨벤션 세팅 자료

index

1. [명명 규칙](#명명-규칙)

2. [디렉토리 규칙](#디렉토리)

## 명명 규칙

코딩의 일관성과 해당 코드의 목적을 명확하기 위해 카멜 케이스 , 파스칼 케이스 (대문자 카멜케이스), 스네이크 케이스 등을 사용하여 해당 코드가 어떤 코드인지 확실히 알 수 있도록 나누고자 합니다.

대게 다른 컨벤션에서도 추천되는 형식을 최대한 빌려와서 커스텀화 한 컨벤션입니다.

1. 변수, 함수 카멜케이스

```ts
function doSomething(){...};

function fooBar(){...};

const myRequiremnet = "~~"; 
```

2. 타입, 생성자(클래스), 컴포넌트, 단일 컴포넌트의 상위폴더 (index로 export default시키는 경우) 파스칼케이스(첫글자 대문자 카멜케이스)

```ts
type Requirement = {...}

interface IProps = {...}

class User{
    ...
}

const MyPage = ()=>{
    ...
}
```

3. 상수, env는 대문자 스네이크 케이스 (_)
```
const BASE_URL = ''

NAVER_MAP_ENV = ''
```

4. css 소문자 스네이크 케이스 (_)
```
    <div className="main_wrapper">
```

5. 폴더 

단일 컴포넌트의 상위 디렉토리 제외하고는 모두 케밥 케이스 (-)

## 디렉토리

디렉토리는 기본적으로 기본적으로 3가지로 나뉩니다.

- root 디렉토리 -- 설정 파일들 모음
- public - 원본 유지 파일들 모음 (imgs, fonts, 외부소스 js...)
- src - 소스파일 모음 [common](#common-공통-폴더) [features](#features) [Pages](#pages)

> src 폴더구조
```bash
├── common
│   ├── components
│   │   ├── elements
│   │   │   ├── Button
│   │   │   ├── FieldSet
│   │   │   │   └── index.tsx
│   │   │   ├── Progress
│   │   │   │   ├── Progress.module.css
│   │   │   │   └── index.tsx
│   │   │   ├── SearchBar
│   │   │   │   └── index.tsx
│   │   │   └── index.ts
│   │   └── layouts
│   │       ├── Grid
│   │       │   └── index.tsx
│   │       ├── Paper
│   │       │   └── index.tsx
│   │       └── index.ts
│   ├── hooks
│   │   ├── index.ts
│   │   ├── useModal.tsx
│   │   └── useRouterEx.tsx
│   ├── styles
│   │   ├── fonts.css
│   │   └── globals.css
│   ├── types
│   └── util
│       ├── date-picker.ts
│       └── validator.ts
├── domains
│   ├── api.ts
│   └── pages.ts
├── features
│   ├── Home
│   │   ├── components
│   │   ├── index.tsx
│   │   └── styles
│   │       └── Home.module.css
│   └── Modal
├── pages
│   ├── _app.tsx
│   └── index.tsx
├── services
│   ├── api
│   ├── hooks
│   └── types
└── store
```

### common 공통 폴더


```bash
├── components
│   ├── elements
│   │   ├── Button
│   │   ├── FieldSet
│   │   │   └── index.tsx
│   │   ├── Progress
│   │   │   ├── Progress.module.css
│   │   │   └── index.tsx
│   │   ├── SearchBar
│   │   │   └── index.tsx
│   │   └── index.ts
│   └── layouts
│       ├── Grid
│       │   └── index.tsx
│       ├── Paper
│       │   └── index.tsx
│       └── index.ts
├── hooks
│   ├── index.ts
│   ├── useModal.tsx
│   └── useRouterEx.tsx
├── styles
│   ├── fonts.css
│   └── globals.css
├── types
└── util
    ├── date-picker.ts
    └── validator.ts
```

- elements 폴더는 가장 기본적인 ui 폴더로 일부러 만들고 css도 같이 첨부

- layouts은 여러가지 가 대응 가능하도록 되도록 subComponents 패턴 이용

- common/styles 는 전역 styles로 작성을 최소화 css로 가장 많이 사용되는 것만 사용

- UI 관련 타입 작성란

- hooks Api 호출이 아닌 ui 관련 훅들은 이곳에서 관리

- util 유틸 함수 파일

### features

```bash
├── Home
│   ├── components
│   ├── index.tsx
│   └── styles
│       └── Home.module.css
└── Modal
```

- pages 대응하여 index.tsx 는 가능하면 작성, query parameters는 해당 폴더 에 상위항에 export default 로 작성, components 폴더는 하위 로 제작.

- Modal은 모두 독립적으로 사용가능하도록 제작.

### Pages

- Pages폴더는 가급적 라우팅, ssr initial data fetching, head 태그 위주만 다룸.

- 같은 이름의 컴포넌트가 features에 있을 예정이니 Pages 폴더 안의 컴포넌트는 ~Page를 붙여서 구분함.

```ts
    const HomePage = ()=>{
        <Home />
    }
    
    export default HomePage
```


### Services

```bash
├── api
├── hooks
└── types
```

- api API서버에 맞게 요청 작성

- hooks 위의 api 를 활용해서 react-query hooks 제작하여 관리하는 곳

- types API 호출에 맞는 타입 작성란