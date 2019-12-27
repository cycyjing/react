import React, { Component } from 'react'
import { addTodo } from './store/action/action'
import { connect } from 'react-redux'
class App extends Component {
  constructor() {
    super()
    this.state = {}
  }
  handleClick = () => {
    this.props.addTodo('hahahhahaha')
  }
  render() {
    return (
      <div>
        {console.log(this.props)}
        <button onClick={this.handleClick}>改名字</button>
        {this.props.name}
      </div>
    )
  }
}

// 1   mapstate 映射的state
const mapState = ({nameState}) => {
// console.log(state);

  
  return {
    name: nameState.name
  }
}

export default connect(mapState, { addTodo })(App)
//1   创建action
//2 dispatch
//3 书写对应的reducer
//4 订阅 state改变
//5 写lisener
//6 在lisener 内部获取到最新状态更新到本组件的状态内