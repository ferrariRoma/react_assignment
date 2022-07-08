import styled from "styled-components";
import React, { memo } from "react";
import { useHistory } from "react-router-dom";

const DayBucket = memo(({ Week }) => {
  // 버튼 누르면 상세 날짜 페이지로 이동
  const Day = useHistory();
  const onClickArrow = (eachDay) => {
    if (!eachDay) {
      alert(`아직 ${Week[0].day}요일 입니다.`);
      return;
    }
    return Day.push(`/date/${eachDay}`);
  };

  return (
    <>
      {Week.map((el, i) => (
        <DayBox Point={el.rating} key={i + "qw"}>
          <p>{el.day}</p>
          {[...Array(5)].map((_, j) =>
            j < el.rating ? (
              <Balls colors key={j + "e"} />
            ) : (
              <Balls key={j + "e"} />
            )
          )}
          {i === 0 ? (
            <TriButton onClick={() => onClickArrow(el.day)} />
          ) : i < 7 - new Date().getDay() ? (
            <TriButton onClick={() => onClickArrow()} />
          ) : (
            <TriButton onClick={() => onClickArrow(el.day)} />
          )}
        </DayBox>
      ))}
    </>
  );
});

const Balls = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background: ${(props) => {
    return props.colors ? "#FEEB3B" : "#DDDDDD";
  }};
`;

const DayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0.8rem 0px;
  p {
    font-weight: bolder;
    font-size: large;
    margin-right: 20px;
  }
`;

const TriButton = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default DayBucket;
