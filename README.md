# 양은선 · 기술교육 포트폴리오

Vite + Vanilla JavaScript로 만든 반응형 단일 페이지입니다. 코드 작업 전 `AGENTS.md`의 프로젝트 규칙을 확인합니다.

## 실행 및 빌드

```sh
npm install
npm run dev
npm run build
npm run preview
```

Windows PowerShell에서 실행 정책으로 `npm.ps1`이 차단되면 `npm.cmd run build`처럼 `npm.cmd`를 사용합니다.

## 콘텐츠 수정

- `index.html`: 내비게이션, 첫 소개, 섹션 제목, 하단 문구와 검색 설명
- `src/data.js`: 프로젝트, 관련 사이트, 다섯 기술 영역의 설명. 프로젝트의 `links`가 빈 배열이면 링크 버튼을 표시하지 않습니다.
- `src/technology.js`, `src/technology.css`: 첫 화면의 방사형 기술 그래픽과 설명 전환. 마우스 올리기, 키보드 포커스, 터치로 영역을 선택합니다.
- `src/main.js`: 교육 철학과 연구 관심사 데이터, 카드 렌더링, 모바일 메뉴와 스크롤 동작
- `src/style.css`: 색상 변수, 레이아웃, 반응형 스타일과 애니메이션
- `public/favicon.svg`: 사이트 아이콘

일러스트는 직접 구성한 SVG와 CSS로 표시하며 외부 이미지 서버나 CDN에 의존하지 않습니다. 외부 사이트 링크는 새 탭에서 열립니다. 운영체제의 애니메이션 감소 설정을 따릅니다.

## Netlify

GitHub 저장소를 Netlify에 연결하고 다음 값을 사용합니다.

- Build command: `npm run build`
- Publish directory: `dist`

`dist`는 빌드 시 생성되며 Git에 추가할 필요가 없습니다.
