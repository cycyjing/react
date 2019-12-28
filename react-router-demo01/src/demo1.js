import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const Home = () => {
  return <h1>Home</h1>
}
const Game = () => {
  return <h1>Game</h1>
}
const Movie = ({match}) => {
  
  return <div>
    <h1>Movie</h1>
    <hr/>
    <ul>
      <li>
        <Link to={`${match.url}/a`}>A movie</Link>
      </li>
      <li>
        <Link to={`${match.url}/b`}>B movie</Link>
      </li>
    </ul>
    <Route path={`${match.path}/:id`} render={(mm) => {
      return <h3>{mm.match.params.id}</h3>
    }}/>
    </div>
}

export default class App extends Component {
  render() {
    return (
      <Router>
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/game'>Game</Link>
          </li>
          <li>
            <Link to='/movie'>Movie</Link>
          </li>
        </ul>
        <Route path='/home' component={Home} />
        <Route path='/game' component={Game} />
        <Route path='/movie' component={Movie} />
      </Router>
    )
  }
}