import React, { useState, useEffect } from 'react'

const Class = (props) => {
  const { clas } = props
  const [expand, setExpand] = useState(false)

  useEffect(() => {
    setExpand(clas.className === 'Class 1')
  }, [])

  return (<dl>
    <dt style={{ border: '1px solid grey' }}>
      <span style={{ marginRight: 50 }}>{clas.className}</span>
      {clas && clas.students && clas.students.length > 0 ?
        (expand ?
          <button onClick={() => { setExpand(false) }}>/\</button> :
          <button onClick={() => { setExpand(true) }}>\/</button>)
        : (<></>)}
    </dt>
    {expand ?
      <div>
        {clas.students && clas.students.map((student) => {
          return (<dd>{student.userName}</dd>)
        })}
      </div> :
      <></>}
  </dl>)
}

export default Class