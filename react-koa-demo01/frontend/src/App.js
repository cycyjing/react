import React, { Component } from 'react'
import { connect } from 'react-redux'
import $http from './services/connect'

const mapState = ({ connectReducer, userReducer, movieReducer }) => {
  return {
    isLoading: connectReducer.get('isLoading'),
    message: connectReducer.get('message'),
    isError: connectReducer.get('isError'),
  }
}
@connect(mapState)
class App extends Component {
  // componentDidMount() {
  //   $http.post('http://localhost:4000/user/login').then(data => {
  //     console.log('data', data)
  //   })
  // }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}
export default App