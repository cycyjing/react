import {combineReducers} from 'redux'
import nameState from './name'
import todoState from './todo'


export default combineReducers({
  nameState,
  todoState
})