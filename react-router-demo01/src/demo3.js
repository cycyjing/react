import React, { Component } from 'react';
import store from './store/store'
import { todo, title } from './store/action/todoAction'

const conn = (MyComponent) => {
  return class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        username: this.props.store.getState().username,
        title: this.props.store.getState().title
      }
      this.props.store.subscribe(this.listener)
    }
    listener = () => {
      this.setState({
        username: this.props.store.getState().username,
        title: this.props.store.getState().title
      })
    }
    handleDispatch = (actionCreator) => {
      this.props.store.dispatch(actionCreator())
    }
    render() {
      return <MyComponent {...this.props} mapState={{ ...this.state }} handleDispatch={this.handleDispatch} />
    }
  }
}
export default class App extends Component {

  render() {
    const NewHeader = conn(Header)
    const NewTitle = conn(Title)
    return (
      <div>
        <NewHeader store={store} />
        <NewTitle store={store} />
      </div>
    )
  }
}
class Header extends Component {
  handleClick=() => {
    this.props.handleDispatch(todo)
  }
  render() {
    return (
      <>
        <h1>{this.props.mapState.username || 'Nothing-username'}</h1>
        <button onClick={this.handleClick}>click to change username</button>
      </>
    )
  }
}
class Title extends Component {
  handleClick=() => {
    this.props.handleDispatch(title)
  }
  render() {
    return (
      <>
        <h1>{this.props.mapState.title || 'Nothing-title'}</h1>
        <button onClick={this.handleClick}>click to change title</button>
      </>
    )
  }
}