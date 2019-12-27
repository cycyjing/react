import actionTypes from '../action/actionTypes'
const initState = {
  name: 'zhangsan'
}

export default (state = initState, action) => {
  console.log(state, action)
  switch (action.type) {
    case 'CHANGE_NAME_LISI':
      return { ...state, name: action.payload.name }
    case actionTypes.ADD_TODO:
      return { ...state, name: action.payload.name }
    default:
      return state
  }
}