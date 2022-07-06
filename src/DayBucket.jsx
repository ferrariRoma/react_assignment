import CheckBall from "./CheckBall";
import styled from "styled-components";
import React, { memo } from "react";

const DayBucket = memo(({ Date }) => {
  const tempArray = Array(5).fill(0);

  return (
    <>
      {Date.map((day, i) => (
        <DayBox key={i + "qw"}>
          <p>{day}</p>
          {}
          {tempArray.map((el, i) => (
            <CheckBall key={i + "e"} />
          ))}
          <LinkArrow />
        </DayBox>
      ))}
    </>
  );
});

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

const LinkArrow = styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
`;

export default DayBucket;
