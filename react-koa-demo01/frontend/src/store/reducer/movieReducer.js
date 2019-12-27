import { fromJS } from 'immutable'
import actionTypes from '../action/actionTypes'
const initState = fromJS({
  movies: []
})
export default (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIES:
      return state.set("movies", fromJS(action.payload))
    default:
      return state;
  }
}