import React, { useState } from 'react'
import Form from './components/Form'
import Info from './components/Info'
import SchoolInfo from './components/school-info/SchoolInfo'

const App = () => {
  const [input, setInput] = useState([])
  const handleInput = (val) => {
    return () => {
      setInput([...input, val])
    }
  }

  return (<>
    <Info input={input}></Info>
    <Form onInput={handleInput}></Form>
    <br />

    <h2>School Info</h2>
    <SchoolInfo />
  </>)
}

export default App