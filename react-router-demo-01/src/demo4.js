import React, { Component } from 'react'
import { connect } from 'react-redux'
import { todo, stitle } from './store/action/todoAction'

class App extends Component {
  handleClick = () => {
    this.props.todo()
    this.props.stitle()
  }
  render() {
    return (
      <>
        <h1>{this.props.username}</h1>
        <h1>{this.props.title}</h1>
        <button onClick={this.handleClick}>click</button>
      </>
    )
  }
}
const mapState = ({todoReducer}) => {
  // console.log('state', state)
  return {
    username: todoReducer.username,
    title: todoReducer.title
  }
}
export default connect(mapState, { todo, stitle })(App)