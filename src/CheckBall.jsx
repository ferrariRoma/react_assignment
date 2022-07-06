import React, { memo } from "react";
import styled from "styled-components";

const CheckBall = memo(() => {
  return (
    <>
      <Ball />
    </>
  );
});

const Ball = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background-color: rgb(255, 235, 59);
`;

export default CheckBall;
