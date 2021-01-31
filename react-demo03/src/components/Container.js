import React from 'react'

const Container = (props) => {
  const { t } = props
  return (<>
    <div style={{ width: 500, height: 50, border: '1px solid red' }}>{t+"   moneth hehehe"}</div>
  </>)
}

export default Container