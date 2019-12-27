import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { connectReducer, userReducer, movieReducer, errorReducer } from './reducer'
export default createStore(combineReducers({
  connectReducer,
  userReducer,
  movieReducer,
  errorReducer
}), applyMiddleware(thunk))