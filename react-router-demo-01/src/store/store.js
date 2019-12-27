import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import todoReducer from './reducer/todoReducer'
export default createStore(combineReducers({todoReducer}),applyMiddleware(thunk))