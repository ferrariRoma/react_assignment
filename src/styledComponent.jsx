import styled from "styled-components";

export const Avg = styled.div`
  color: blue;
  font-size: 25px;
  font-weight: 900;
  margin-bottom: 10px;
`;

export const Balls = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin: 5px;
  background: ${(props) => {
    return props.colors ? "#FEEB3B" : "#DDDDDD";
  }};
`;

export const DayBox = styled.div`
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

export const TriButton = styled.div`
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
