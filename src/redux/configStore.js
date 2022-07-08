import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import reducer from "./modules/reduxPoint";

const rootReducer = combineReducers({ reducer });

const store = configureStore(rootReducer);

export default store;
