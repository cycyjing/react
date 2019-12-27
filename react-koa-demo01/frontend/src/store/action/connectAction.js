import actionTypes from './actionTypes'
export const start = () => {
  return {
    type: actionTypes.CONNECT_START,
    payload: {
      isLoading: true
    }
  }
}
export const end = () => {
  return {
    type: actionTypes.CONNECT_END,
    payload: {
      isLoading: false
    }
  }
}
export const error = (error) => {
  return {
    type: actionTypes.CONNECT_ERROR,
    payload: {
      isLoading: false,
      message: error.message,
      isError: true
    }
  }
}