import React, { memo, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { dailyRatingFunc } from "./redux/modules/reduxPoint";

const EachDay = memo(() => {
  const routing = useHistory();
  const param = useParams();
  const date = useSelector((state) => state.reducer.point).filter(
    (el) => el.day === param.day
  );
  const [yellowball, setYellowball] = useState(date[0].rating);

  const dispatch = useDispatch();

  // 동그라미를 클릭하면 평점을 매긴다.
  const onClickRating = (e) => {
    const clicked = Number(e.target.id) + 1;
    setYellowball(clicked);
  };
  // 키다운 하면 노란색 공 입력
  const handleKeyDown = (e) => {
    const typed = e.key;
    const reg = /\d/;
    if (typed.match(reg) === null) {
      return;
    } else if (typed > 5) {
      return;
    }
    setYellowball(Number(typed));
  };
  // 평점 남기기 버튼을 누르면 홈으로 간다.
  const onClickRatingBtn = () => {
    dispatch(dailyRatingFunc(param, yellowball));
    routing.push("/");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div id="div__container">
        <h3>
          <span>{param.day}요일</span> 평점 남기기
        </h3>
        <div id="circle__container">
          {[...Array(5)].map((el, j) =>
            yellowball > j ? (
              <Balls key={j + "n"} id={j} colors onClick={onClickRating} />
            ) : (
              <Balls key={j + "n"} id={j} onClick={onClickRating} />
            )
          )}
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
