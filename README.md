
# 리액트 프로젝트 시작하기

1. node.js 설치 (LTS 버전으로)

2. create-react-app 설치 (최초 1번)

`$ npm install -g create-react-app`

3. react 프로젝트 생성

`$ npx create-react-app 프로젝트이름`

4. react 프로젝트 실행

`$ cd 프로젝트폴더`
`$ npm start`

- http://localhost:3000 에서 프론트엔드 서버 실행.

# git clone 시 주의사항

`$ npm install`
명령을 터미널에서 실행하여 라이브러리 설치<br>
이유: node_modules 폴더는 github에 포함되어 있지 않기 때문에 다른 환경에서는 라이브러리 다운로드 및 설치가 반드시 필요!

# 추가 라이브러리 설치

1. styled-components: 동적 css 처리를 도와주는 라이브러리.

- `$ npm install styled-components`

2. css 확장 라이브러리 sass

- `$ npm install sass`