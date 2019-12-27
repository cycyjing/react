import actionTypes from './actionTypes'
import axios from 'axios'

export const addTodo =todo=>dispatch=>{
  axios.get('https://jsonplaceholder.typicode.com/todos/3').then(r=>r.data).then(data=>{
    const action= {
      type:actionTypes.ADD_TODO,
      payload:{
        name:data.title
      }
    }
    dispatch(action)
  }) 
}
