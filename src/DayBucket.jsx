import { Balls, DayBox, TriButton } from "./styledComponent";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const DayBucket = memo(({ Week }) => {
  // 버튼 누르면 상세 날짜 페이지로 이동
  const Day = useNavigate();
  const onClickArrow = (eachDay) => {
    if (!eachDay) {
      alert(`아직 ${Week[0].day}요일 입니다.`);
      return;
    }
    return Day(`/date/${eachDay}`);
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

export default DayBucket;
