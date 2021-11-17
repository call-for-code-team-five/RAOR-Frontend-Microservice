import { accesstoken } from "../actions/userinfo";

const initialState = {
  accesstoken: "",
};

function userInfoReducer(state = initialState, actions) {
  switch (actions.type) {
    case accesstoken:
      return { ...state, accesstoken: actions.accesstoken };
    default:
      return state;
  }
}

export default userInfoReducer;
