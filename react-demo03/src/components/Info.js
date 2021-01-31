import React from 'react'
import PropTypes from 'prop-types'

const Info = (props) => {
  const {input}=props

  return (<>
    <div style={{ border: '1px solid purple' }}>
      <ul>
        {input.map((ele) => {
          return (<li>{ele}</li>)
        })}
      </ul>
    </div>
  </>)
}

Info.propTypes = {
  input: PropTypes.array.isRequired
}

export default Info