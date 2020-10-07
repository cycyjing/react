import React, { useEffect, useState, useCallback, useRef } from 'react';
import logo from './logo.svg';
import './App.css';

function App(props) {
  const [count, setCount] = useState(0)
  const myref = useRef({ value: 1 })
  useMyHook()

  const [b, setB] = useState(1)
  const a = () => {
    (
      async () => {
        setCount(100)
      }
    )()
  }
  const mza = useCallback(
    a,
    [b],
  )

  const add = () => {
    // mza()
    setCount(count + 1)
  }
  const subtract = () => {
    setCount(count - 1)
  }
  useEffect(() => {
    console.log("effect neibu1")
    return () => {
      console.log("effect neibu2")
    }
  }, [])
  useEffect(() => {
    console.log("effect count neibu1")
    return () => {
      console.log("effect count neibu2")
    }
  }, [count])
  console.log("out of hooks------")
  return (
    <React.Fragment>
      {/* <div>COUNT: {myref.current.value}</div> */}
      <div>COUNT: {count}</div>
      <button onClick={add}>+</button>
      <button onClick={subtract}>-</button>
    </React.Fragment>
  );
}

const useMyHook = () => {
  const [aaa, setAaa] = useState(0)
  useEffect(() => {
    console.log('aaa', aaa)
  }, [aaa])
  return aaa
}
export default App;
