import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
const PEEPS = [
  { id: 0, name: "Michelle", friends: [1, 2, 3] },
  { id: 1, name: "Sean", friends: [0, 3] },
  { id: 2, name: "Kim", friends: [0, 1, 3] },
  { id: 3, name: "David", friends: [1, 2] }
]
const findObjFromID = (id) => {
  //找到符合条件的
  return PEEPS.find((val) => {
    return id == val.id
  })
}
const FindFriends = ({ match }) => {
  const id = match.params.pid || 0
  const findObj = findObjFromID(id)
  console.log('match', match.url)
  return (
    <>
      {findObj.name}'s friends
      <ul>
        {findObj.friends.map((fid) => {
          return (
            <li key={fid}>
              <Link to={`${match.url==='/'?'':match.url}/${fid}`}>{findObjFromID(fid).name}</Link>
            </li>
          )
        })}
      </ul>
      <Route path={`${match.url==='/'?'':match.url}/:pid`} component={FindFriends}/>
    </>
  )
}
export const App = () => {
  return (
    <Router>
      <Route path='/' component={FindFriends} />
    </Router>
  )
}