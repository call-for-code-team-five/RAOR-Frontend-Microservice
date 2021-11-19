import { leftPane } from "../actions/videoComponent";
import AssetComponent from "../components/assets/AssetComponent"

const initialState = {
  leftPane: <AssetComponent/>,
};

function videoComponentReducer(state = initialState, actions) {
  switch (actions.type) {
    case leftPane:
      return { ...state, leftPane: actions.leftPane };
    default:
      return state;
  }
}

export default videoComponentReducer;
