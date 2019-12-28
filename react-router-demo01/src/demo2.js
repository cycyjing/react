import React, { Component,createContext } from 'react'
const {Provider,Consumer}=createContext()

class MyPro extends Component{
  constructor(){
    super()
    this.state={
      count:100
    }
  }
  subs=() => {
    this.setState({
      count:this.state.count-1,
    })
  }
  render(){
    return <Provider
    value={{count:this.state.count,change:this.subs}}>{this.props.children}</Provider>
  }
}
export default class Count extends Component{
  render(){
    return (
      <MyPro>
        <Consumer>
          {(arg) => {
            return (
              <>
              <h1>{arg.count}</h1>
              <button onClick={arg.change}>click</button>
              </>
            )
          }}
        </Consumer>
      </MyPro>
    )
  }
}