import React,{FC} from 'react'
import PropTypes from 'prop-types'
// type TapProps = {
//   onTap:(value:string) => () => void
// }
// const Tap:FC<TapProps>= (props) => {
  const Tap= (props) => {
const {onTap} = props
  return (<>
    <button key="1" onClick={onTap('one')}>one</button>
    <button key="2" onClick={onTap('two')}>two</button>
    <button key="3" onClick={onTap('three')}>three</button>
    <button key="4" onClick={onTap('four')}>four</button>
  </>)
}

Tap.propTypes={
  onTap:PropTypes.oneOfType(PropTypes.bool,PropTypes.number)
}
export default Tap