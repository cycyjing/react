export const todo = () => {
  return {
    type: 'TODO',
    payload: {
      username: 'zhangsanaaaaaaaaaaaaaaaaaaaa'
    }
  }
}
export const stitle = () => (dispatch) => {
  dispatch({
    type: 'TITLE',
    payload: {
      title: 'I dont like you anymore!!!'
    }
  })
}