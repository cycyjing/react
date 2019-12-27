import { fromJS } from "immutable";
import actionTypes from "../action/actionTypes";
const initState = fromJS({
  // username: "",
  // password: "",
  isUser:false
});
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.USER_LOGIN:
      return state.merge(action.payload);
    case actionTypes.USER_REGISTER:
      return state.merge(action.payload);
    default:
      return state;
  }
};
