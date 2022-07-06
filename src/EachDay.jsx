import React, { memo } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const EachDay = memo(() => {
  const routing = useHistory();
  const param = useParams();

  const tempArray = Array(5).fill(0);
  const onClickRatingBtn = () => {
    routing.push("/");
  };
  return (
    <>
      <div id="div__container">
        <h3>
          <span>{param.day}요일</span> 평점 남기기
        </h3>
        <div id="circle__container">
          {tempArray.map((el, j) => (
            <Balls key={j + "n"} />
          ))}
        </div>
        <button id="rating__btn" onClick={onClickRatingBtn}>
          평점 남기기
        </button>
      </div>
    </>
  );
});

export default EachDay;

const Balls = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background: ${(props) => {
    return props.colors ? "#FEEB3B" : "#DDDDDD";
  }};
`;
