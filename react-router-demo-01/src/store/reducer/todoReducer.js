const initState = {
  username: '',
  title: ''
}
export default (state = initState, action) => {
  switch (action.type) {
    case 'TODO':
      return { ...state, ...action.payload }
    case 'TITLE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}