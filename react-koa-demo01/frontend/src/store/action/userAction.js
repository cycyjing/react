import actionTypes from "./actionTypes";
import { login as $login } from "../../services";
import { errorHappen } from "./errorAction";
export const login = ({ username, password }) => dispatch => {
  $login({ username, password })
    .then(data => {
      if (data.data.success) {
        console.log("action data :", data);
        localStorage.setItem("username", data.data.data.username);
        localStorage.setItem("password", data.data.data.password);
        dispatch({
          type: actionTypes.USER_LOGIN,
          payload: {
            isUser: true
          }
        });
      } else {
        dispatch(
          errorHappen({
            isError: true,
            errMsg: data.message,
            statusCode: data.statusCode,
            hasMentioned: false
          })
        );
      }
    })
    .catch(err => {
      //1 dispatch
      // 2 actioncreator error
      dispatch(errorHappen(err));
    });
};
