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

## 구현

1. lerna와 yarn을 사용해 모노레포 폴더 구성.
2. yarn을 사용해 각 workspace에 모듈 설치.
3. 공통으로 사용할 부분은 root에 위치해서 사용.
4. ui-component 환경 구성
5. webapp 환경 구성
6. lerna를 사용해 webapp에서 ui-components 모듈 설치.
7. webapp에서 ui-components를 사용해 서비스 구현.
8. github actions를 통해 배포
