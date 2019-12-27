import { fromJS } from 'immutable'
import actionTypes from '../action/actionTypes'
const initState = fromJS({
  isLoading: false,
  message: '',
  isError: false
})
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CONNECT_START:
      return state.mergeDeep(action.payload);
    case actionTypes.CONNECT_END:
      return state.mergeDeep(action.payload);
    case actionTypes.CONNECT_ERROR:
      return state.mergeDeep(action.payload);
    default:
      return state;
  }
}