import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import pointReducer from "./modules/reduxPoint";

const rootReducer = combineReducers({ reducer: pointReducer });

const store = configureStore({ reducer: rootReducer });

export default store;
