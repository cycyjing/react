import React from 'react'
import { connect } from 'react-redux'
import { errorHappen, errorConfirm } from '../../store/action'
const mapState = ({ errorReducer }) => {
  return {
    isError: errorReducer.get('isError'),
    errMsg: errorReducer.get('errMsg'),
    statusCode: errorReducer.get('statusCode'),
    hasMentioned: errorReducer.get('hasMentioned')
  }
}
const ErrorTip = (props) => {

  return (
    <div>
      {props.errMsg}
    </div>
  )
}
export default connect(mapState, { errorHappen, errorConfirm })(ErrorTip)