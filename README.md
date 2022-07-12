# React 입문주차 과제

## 랜덤 평균 평점 및 일일 평점에서 리팩토리 중

### 수정 및 추가된 기능(~7.10)

- 랜덤 평균 평점 및 일일 평점에서 사용자가 직접 평점을 남길 수 있도록 개선
- 일요일이 한 주의 시작을 전제로, 해당 요일 이후 요일의 상세 페이지 접근 불가(e.g: 화요일인데 수요일, 목요일, 금요일, 토요일 평점에 접근불가)
- 평균을 낼 때 월요일이면 일요일, 월요일 이틀을 기준으로 평균을 냄. 금요일이면 일~금요일까지 6일을 기준으로 평균을 냄.
- 중간 과정에서 일일 평점 페이지의 로직을 개선
  - 기존에 평점을 입력할 때마다 불필요하게 평점의 dispatch가 이루어졌는데, 일일 평점 컴포넌트에 state를 하나 만들어서 평점 남기기 버튼을 클릭했을 때 dispatch가 되고 나머지 과정에서는 setState가 이루어지게 최적화

### 7월 11일 자
