import actionTypes from '../action/actionTypes'
const initState = {
  name: 'lisi'
}

export default (state = initState, action) => {
  console.log(state, action)
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return { ...state, name: action.payload.name }
    default:
      return state
  }
}