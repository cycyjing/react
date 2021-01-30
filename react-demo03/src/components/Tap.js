import React from 'react'

const Tap = (props) => {
const {onTap} = props
  return (<>
    <button key="1" onClick={onTap('one')}>one</button>
    <button key="2" onClick={onTap('two')}>two</button>
    <button key="3" onClick={onTap('three')}>three</button>
    <button key="4" onClick={onTap('four')}>four</button>
  </>)
}

export default Tap