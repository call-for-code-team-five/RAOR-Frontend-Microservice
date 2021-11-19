import { combineReducers } from "redux";
import userInfoReducer from "./userinfo";
import videoComponentReducer from './videoComponent'

const reducers = combineReducers({
  userinfo: userInfoReducer,
  VideoComponent : videoComponentReducer,
});

export default reducers;
