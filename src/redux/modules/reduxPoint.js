import { db } from "../../firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  addDoc,
  getDoc,
} from "@firebase/firestore";
import { useParams } from "react-router-dom";

export const DAILYRATING = "record daily rating";
export const LASTWEEK = "record last week";
export const TWOWEEKSAGO = "record two weeks ago";
// 1. firestore에서 데이터를 가지고 오는 액션 타입 설정
const LOAD = "weeklyRating/LOAD";

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
    case LOAD: {
      const loadedData = action.weeklyRating;
      return {
        point: loadedData[3].point,
        avgRating: Number(loadedData[1].avgRating).toFixed(1),
        lastWeek: Number(loadedData[0].lastWeek).toFixed(1),
        twoWeeksAgo: Number(loadedData[2].twoWeeksAgo).toFixed(1),
      };
    }
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

// 2. firestore action function 설정
export function loadWeeklyRating(weeklyRating) {
  return { type: LOAD, weeklyRating };
}

// 3. firestore에서 데이터를 가져오는 middleware인 thunk 설정
export const loadWeeklyRatingFB = () => {
  return async function (dispatch) {
    const weeklyRatingData = await getDocs(collection(db, "weeklyRating"));
    let weeklyRatingList = [];
    weeklyRatingData.forEach((el) => {
      weeklyRatingList.push({ id: el.id, ...el.data() });
    });
    dispatch(loadWeeklyRating(weeklyRatingList));
  };
};

export const updateWeeklyRatingFB = (date, dailyRating) => {
  return async (dispatch, getState) => {
    const docRef = doc(db, "weeklyRating", "JhoXEqilK3JSrz58SvqX");
    const temp = (await getDoc(docRef)).data().point;
    let index = 0;
    const point = [...temp].map((el, i) => {
      if (el.day === date.day) {
        index = i;
        return { ...el, rating: dailyRating };
      } else {
        return el;
      }
    });
    await updateDoc(docRef, { point });
    let update_redux = getState().reducer.point.filter((el, i) => index === i);
    update_redux = { ...update_redux[0], rating: dailyRating };
    dispatch(dailyRatingFunc(update_redux.day, update_redux.rating));
  };
};

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
