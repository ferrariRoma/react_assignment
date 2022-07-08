import React, { useRef, memo } from "react";
import styled from "styled-components";
import DayBucket from "./DayBucket";
import { useSelector } from "react-redux";
import { setDates } from "./redux/modules/reduxPoint";

const Home = memo(() => {
  // point객체 가져오기
  const point = useSelector((state) => state.reducer.point);
  // 날짜 초기화하기
  const Date = setDates(point);
  // 평균 점수 구하기
  const avg = useSelector((state) => state.reducer.avgRating);

  const ResetBtn = useRef(null); // 리셋 버튼

  return (
    <>
      <h1>캠프 일주일 평점</h1>
      <DayBucket Week={Date} />
      <Avg>평균 평점</Avg>
      <Avg>{avg}</Avg>
      <button ref={ResetBtn}>Reset</button>
    </>
  );
});

const Avg = styled.div`
  color: blue;
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 10px;
`;

export default Home;
