import actionTypes from "./actionTypes";
export const errorHappen = err => {
  return {
    type: actionTypes.ERROR_HAPPEN,
    payload: {
      isError: true,
      errMsg: err.message,
      statusCode: err.statusCode,
      hasMentioned: false
    }
  };
};
export const errorConfirm = () => {
  return {
    type: actionTypes.ERROR_CONFIRM,
    payload: {
      isError: false,
      errMsg: "",
      statusCode: "",
      hasMentioned: true
    }
  };
};
