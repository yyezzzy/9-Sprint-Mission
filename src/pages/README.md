# 프로젝트 리팩토링 요약

## 1. getServerSideProps 사용

- **이전 코드**: 클라이언트 측에서 API를 호출하여 데이터를 가져왔습니다. 이는 페이지가 로드될 때마다 데이터를 가져와야 하며, 사용자가 페이지를 이동할 때마다 새로운 요청이 발생합니다.
- **리팩토링 후 코드**: `getServerSideProps`를 사용하여 서버 측에서 데이터를 미리 가져옵니다. 이렇게 하면 페이지가 요청될 때 서버에서 데이터가 준비되어 클라이언트로 전달됩니다. 이는 초기 로딩 속도를 개선하고, 클라이언트에서 불필요한 API 요청을 줄이는 데 도움이 됩니다.

## 2. 코드 구조의 명확성

- **이전 코드**: 모든 로직이 하나의 컴포넌트 내에 있었고, 가독성이 떨어질 수 있었습니다.
- **리팩토링 후 코드**: `getServerSideProps`와 UI 로직을 명확히 분리하여 가독성을 높였습니다. 데이터 fetching 로직이 별도의 함수로 분리되어, 컴포넌트가 더 깔끔하고 이해하기 쉬워졌습니다.

## 3. 페이지 네비게이션 개선

- **이전 코드**: 페이지 네비게이션을 위해 직접적으로 페이지 이동을 위해 `setPage`를 사용했습니다.
- **리팩토링 후 코드**: 페이지 이동을 위해 URL을 변경하여 새로운 페이지로 이동하게끔 하여, 브라우저의 히스토리를 활용합니다. 사용자가 "이전"이나 "다음" 버튼을 클릭할 때 URL이 변경되어 페이지가 새로 고침되고, 그에 따라 데이터도 새로 가져오게 됩니다.

## 4. 에러 처리

- **이전 코드**: API 요청 실패 시 사용자에게 적절한 피드백을 제공하지 않았습니다.
- **리팩토링 후 코드**: 오류 발생 시 콘솔에 오류 메시지를 기록하고, 빈 리스트와 함께 페이지를 반환하여 사용자에게 데이터가 없음을 알리는 기능을 추가했습니다. 이는 사용자가 오류를 인지할 수 있도록 도와줍니다.

## 5. 타입 정의의 명확성

- **이전 코드**: 타입 정의가 있었지만, 사용되는 위치와 컨텍스트가 혼재되어 가독성을 떨어뜨렸습니다.
- **리팩토링 후 코드**: 타입을 명확하게 정의하고, 이들을 컴포넌트의 props로 전달하여, 타입 안정성과 가독성을 더욱 향상시켰습니다. TypeScript의 장점을 최대한 활용했습니다.
