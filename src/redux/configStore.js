import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware, compose } from "@reduxjs/toolkit";
import pointReducer from "./modules/reduxPoint";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ reducer: pointReducer });
// 5. 미들웨어를 인헨서라는 변수에 몽땅 할당한 다음에
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
// 6. 스토어를 설정할 때 reducer 옆에 더해준다. 이러면 셋팅 끝!
const store = configureStore({ reducer: rootReducer }, enhancer);
// 7. 이후에는 컴포넌트에서 액션을 디스패치 해서 middleware를 담당하는 액션함수를 호출하는 방식!
// 8. 그럼 미들웨어 액션 함수에서는 라스트웨어 액션 함수에 dispatch를 보냄!(thunk를 설정한 미들웨어는 함수를 리턴해주는데 그 함수는 dispatch를 인자로 받기 때문에 그대로 dispatch(라스트웨어 액션 함수를 호출하면 된다.))

export default store;
