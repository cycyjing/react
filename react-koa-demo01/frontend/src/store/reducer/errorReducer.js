import { fromJS } from 'immutable'
import actionTypes from '../action/actionTypes'
const initState = fromJS({
  isError: false,
  errMsg: '',
  statusCode: '',
  hasMentioned: true
})
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ERROR_HAPPEN:
      return state.merge(action.payload)
    case actionTypes.ERROR_CONFIRM:
      return state.merge(action.payload)
    default:
      return state;
  }
}
