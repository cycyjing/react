import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Link, Redirect, Route, Switch, Prompt } from 'react-router-dom'
const Home = ({ location }) => {
  const [inputVal, setInputVal] = useState('')
  const [isValChanged, setIsValChanged] = useState(false)

  return (
    <>
      <Prompt when={isValChanged} message={() => {
        console.log('location', location)
        return `Are you sure to ${location.pathname} ?`
      }} />
      <input type='input' onChange={(e) => {
        setIsValChanged(true)
        setInputVal(e.currentTarget.value)
      }} />
    </>
  )
}
const Love = ({ location,match }) => {

  const par = new URLSearchParams(location.search)
  return <h1>Love {par.get('name')} path:{match.params.id} </h1>
}
const Nomatch = ({ location }) => {
  return <h1>404,{location.pathname} is not exist</h1>
}
export const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/love/you">Love you</Link>
        </li>
        <li>
          <Link to={{
            pathname: '/love/deep',
            search: '?name=zhu'
          }}>Love deep</Link>
        </li>
        <li>
          <Link to="/111">No match</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/' exact component={Home} />
        <Redirect from='/home' to='/' />
        <Route path='/love/:id' component={Love} />
        <Route component={Nomatch} />
      </Switch>
    </Router>
  )
}