import React, { memo } from "react";
import DayBucket from "./DayBucket";
import { useSelector, useDispatch } from "react-redux";
import {
  loadWeeklyRatingFB,
  setDates,
  loadWeeklyRating,
} from "./redux/modules/reduxPoint";
import { Avg } from "./styledComponent";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "./firebase";

const Home = memo(() => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(loadWeeklyRatingFB());
  }, []);
  // point객체 가져오기
  const point = useSelector((state) => state.reducer.point);
  // 날짜 초기화하기
  const Date = setDates(point);
  // 평균 점수 구하기
  const avg = useSelector((state) => state.reducer.avgRating);

  return (
    <>
      <h1>캠프 일주일 평점</h1>
      <DayBucket Week={Date} />
      <Avg>평균 평점</Avg>
      <Avg>{avg}</Avg>
    </>
  );
});

export default Home;
