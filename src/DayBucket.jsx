import styled from "styled-components";
import React, { memo } from "react";
import { useHistory } from "react-router-dom";

const DayBucket = memo(({ Date, Point }) => {
  const Day = useHistory();
  const onClickArrow = (eachDay) => {
    Day.push(`/date/${eachDay}`);
  };
  const tempArray = Array(5).fill(0);
  return (
    <>
      {Date.map((day, i) => (
        <DayBox Point={Point} key={i + "qw"}>
          <p>{day}</p>
          {tempArray.map((el, j) =>
            j < Point[i] ? (
              <Balls colors key={j + "e"} />
            ) : (
              <Balls key={j + "e"} />
            )
          )}
          <TriButton onClick={() => onClickArrow(day)} />
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
