import React, { useState } from 'react'
import Tap from './components/Tap'
import Container from './components/Container'
const App = () => {
  const [tap, setTap] = useState('one')
  const handleTap = (value) => {
    return () => {
      setTap(value)
    }
  }

  return (<>
    <Tap onTap={handleTap}></Tap>
    <Container t={tap}></Container>
  </>)
}


const a = () => { }



export default App
