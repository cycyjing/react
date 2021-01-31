import React, { useState } from 'react'
import Form from './components/Form'
import Info from './components/Info'

const App=() => {
  const [input, setInput]=useState([])
  const handleInput=(val) => {
    return () => {
      setInput([...input,val])
    }
  }

  return (<>
    <Info input={input}></Info>
    <Form onInput={handleInput}></Form>
  </>)
}

export default App