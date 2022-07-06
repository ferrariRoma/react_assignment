import React, { useRef, memo, useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

const EachDay = memo(() => {
  const [yellowball, setYellowball] = useState(0);
  const Rating = useRef(null);
  const routing = useHistory();
  const param = useParams();

  const tempArray = Array(5).fill(0);
  const onClickRatingBtn = () => {
    routing.push("/");
  };

  const onClickRating = (e) => {
    const clicked = Number(e.target.id) + 1;
    setYellowball(clicked);
  };

  const handleKeyDown = (e) => {
    const typed = e.key;
    const reg = /\d/;
    if (typed.match(reg) === null) {
      return;
    } else if (typed > 5 || typed < 1) {
      return;
    }
    setYellowball(typed);
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
          {tempArray.map((el, j) =>
            yellowball > j ? (
              <Balls
                key={j + "n"}
                id={j}
                colors
                onClick={onClickRating}
                ref={Rating}
              />
            ) : (
              <Balls
                key={j + "n"}
                id={j}
                onClick={onClickRating}
                ref={Rating}
              />
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
