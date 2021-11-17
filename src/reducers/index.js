import { combineReducers } from "redux";
import userInfoReducer from "./userinfo";

const reducers = combineReducers({
  userinfo: userInfoReducer,
});

export default reducers;
