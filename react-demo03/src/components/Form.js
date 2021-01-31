import React, { useState } from 'react'
import PropTypes from 'prop-types'

const Form = (props) => {
  const { onInput } = props
  const [value, setValue] = useState('')
  const handleValueChange = (e) => {
    setValue(e.target.value)
  }

  return (<>
    <input onChange={handleValueChange} value={value}></input>
    <button onClick={onInput(value)}>Confirm</button>
  </>)
}

Form.propTypes = {
  onInput: PropTypes.func.isRequired
}

export default Form