# Lerna 연습

모노레포 형식의 Frontend 서비스 개발환경을 구현.

```bash
packages/
  webapp/
  ui-components/
```

- webapp은 서비스 구현을 위한 영역
- ui-components는 webapp에서 사용하는 react component 라이브러리 영역.

이렇게 한 이유는 구현 및 배포를 나눠놓고 하고 싶었기 때문. 

예) ui-components는 컴포넌트 구현과 디자인 시스템을 위한 페이지를 배포

## 구현 및 정리

1. lerna와 yarn을 사용해 모노레포 폴더 구성.
  - lerna는 versioning, 모듈간 의존성을 쉽게 사용하기 위해서 사용
  - yarn은 모노레포 구성을 위해 사용.
2. yarn을 사용해 각 workspace에 모듈 설치.
  - module hoisting
  - node_modules/.bin 파일
    - 원본 파일의 경로를 가리키는 파일.
3. 공통으로 사용할 부분은 root에 위치해서 사용.
  - eslint, typescript ...
  - 하위 패키지에서 script를 실행할 떄 해당 경로에서 찾지 못하면 상위의 폴더로 찾아감. 그래서 실행 가능함.
4. ui-component 환경 구성
  - rollup을 사용
    - 여러가지 모듈 형태로 빌드가능함.
    - rollup을 사용하는 이유는 esm 빌드가 가능하기 때문. webpack을 사용하면 cjs 형태로 빌드가 되기 때문에 이렇게 변환된 파일을 앱에서 사용하게 된다면 빌드 할 때 treeshaking이 지원이 되지 않음.
  - default as 
    - default export는 하나만 존재 가능
    - named export는 여러개 존재 가능
5. webapp 환경 구성
  - parcel 구성
6. lerna를 사용해 webapp에서 ui-components 모듈 설치.
  - lerna add ui-components --scope=webapp
    - ui-components를 webapp에 설치
    - hoisting이 일어나면서 root node_modules에 설치됨 (ui-component)
    - original 소스를 변경하면 node_modules의 소스도 변경됨. 왜그럴까? node_modules의 소스가 symlink되어 있기 떄문일까?
7. webapp에서 ui-components를 사용해 서비스 구현.
  - 정상 동작
  - ui-components를 바꾸면 webapp에 구현된 내용도 실시간으로 바뀌지 않을까?
    - 바뀜.
8. github actions를 통해 배포
