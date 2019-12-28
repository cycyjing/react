import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './store/store'
import {App} from './App'
// import Count from './demo2'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))
// ReactDOM.render(<Count/>,document.querySelector('#root'))