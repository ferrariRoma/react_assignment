import React, { useState, useRef, memo } from "react";
import styled from "styled-components";
import { Route } from "react-router-dom";
import DayBucket from "./DayBucket";
import Date from "./Date";

const makeAvgPoint = () => {
  const avgs = Array(7).fill(0);
  const RandomNum = avgs.map((el) => Math.floor(Math.random() * 5 + 1));
  return (RandomNum.reduce((acc, el) => acc + el, 0) / 7).toFixed(1);
};

const makeEachPoint = () => {
  const eachArray = Array(7).fill(0);
  const eachPoint = eachArray.map((el) => Math.floor(Math.random() * 5 + 1));
  return eachPoint;
};

const setDates = () => {
  const DateArray = ["일", "월", "화", "수", "목", "금", "토"];
  const Today = new Date().getDay();
  const DateResult = [];
  const Dates = () => {
    for (let i = 0; i < 7; i++) {
      DateResult[i] = DateArray[(Today + 7 + i) % 7];
    }
  };
  Dates();
  return DateResult;
};

const App = memo(() => {
  const [avg, setAvg] = useState(makeAvgPoint); // avg point생성
  const [DateResult, setDateResult] = useState(setDates); // 실시간 날짜배열생성
  const [point, setPoint] = useState(makeEachPoint); // 각 날짜별 노란checkBall 갯수
  const ResetBtn = useRef(null); // 리셋 버튼

  const onClickReset = (e) => {
    setAvg("0.0");
  };

  return (
    <>
      <Route path="/" exact>
        <h1>항해 일주일 평점</h1>
        <DayBucket Date={DateResult} />
        <Avg>평균 평점</Avg>
        <Avg>{avg}</Avg>
        <button ref={ResetBtn} onClick={onClickReset}>
          Reset
        </button>
      </Route>
      <Route path="/date/:day" exact>
        <Date />
      </Route>
    </>
  );
});

const Avg = styled.div`
  color: blue;
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 10px;
`;

export default App;
