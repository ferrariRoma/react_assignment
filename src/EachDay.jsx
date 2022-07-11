import React, { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Balls } from "./styledComponent";
import { useSelector, useDispatch } from "react-redux";
import {
  dailyRatingFunc,
  updateWeeklyRatingFB,
} from "./redux/modules/reduxPoint";

const EachDay = memo(() => {
  const routing = useNavigate();
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
    dispatch(updateWeeklyRatingFB(param, yellowball));
    routing("/");
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
