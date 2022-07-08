export const DAILYRATING = "record daily rating";
export const LASTWEEK = "record last week";
export const TWOWEEKSAGO = "record two weeks ago";

export const initialState = {
  point: [
    { day: "일", rating: 0 },
    { day: "월", rating: 0 },
    { day: "화", rating: 0 },
    { day: "수", rating: 0 },
    { day: "목", rating: 0 },
    { day: "금", rating: 0 },
    { day: "토", rating: 0 },
  ],
  avgRating: Number(0).toFixed(1),
  lastWeek: Number(0).toFixed(1),
  twoWeeksAgo: Number(0).toFixed(1),
};

const pointReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case DAILYRATING: {
      // avgRating도 함께 변경
      const thisDay = JSON.parse(JSON.stringify(state.point));
      thisDay.map((el) =>
        el.day === action.index ? (el.rating = action.rating) : el
      );
      const newAvg = makeAvgPoint(thisDay.map((el) => el.rating));
      return { ...state, point: thisDay, avgRating: newAvg };
    }
    case LASTWEEK: {
      // 지난 주 대비 증감률 적기
      return console.log("LASTWEEK");
    }
    case TWOWEEKSAGO: {
      // 지난 주 대비 증감률 적기
      return console.log("TWOWEEKSAGO");
    }
    default:
      return state;
  }
};
// DAILYRATING 액션함수
export function dailyRatingFunc(index, rating) {
  return { type: DAILYRATING, index: index.day, rating };
}

// 평균을 구하는 함수
function makeAvgPoint(point) {
  const Today = new Date().getDay();
  const avgs = point;
  const calcAvgs = (
    avgs.reduce((acc, el, i) => (i <= Today ? acc + el : acc), 0) /
    (Today + 1)
  ).toFixed(1);
  return calcAvgs;
}

// initialState에서 Point객체를 넘겨주면 오늘 날짜에 맞게 전환시켜줌.
export function setDates(point) {
  const DateArray = point;
  const Today = new Date().getDay();
  const arrange = [];
  for (let i = 0; i < 7; i++) {
    arrange[i] = DateArray[(Today + i) % 7];
  }
  return arrange;
}

export default pointReducer;
