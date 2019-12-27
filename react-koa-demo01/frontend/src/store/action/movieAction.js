import actionTypes from './actionTypes'
import { getMovies } from '../../services'
import { errorHappen } from './errorAction'
export const getMovie = type => dispatch => {
  //异步请求
  // 1 请求
  // 2 .then获取数据
  // 3 payload
  // 4 手动dispatch
  getMovies(type).then((data) => {
    console.log('action', data.data.data)
    dispatch(errorHappen('djfklsjdfslkf'))
    dispatch({
      type: actionTypes.GET_MOVIES,
      payload: data.data.data
    })
  })
}