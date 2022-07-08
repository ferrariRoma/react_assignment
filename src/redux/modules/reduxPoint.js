const RECORDRATING = "record daily rating";

const initialState = {
  point: [],
};

const reducer = (state = {}, action = {}) => {
  switch (action.type) {
    case RECORDRATING:
      return console.log("리듀서의 레코딩 케이스 입니다.");
    default:
      return state;
  }
};

export const recordRatingControler = (widget) => {
  return console.log("레코딩 액션함수 입니다.");
};

export default reducer;
