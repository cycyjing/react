import React from 'react'
import { Breadcrumb } from 'antd';
import { withRouter } from 'react-router-dom'

function PublicBreadcrumb(props) {
  const { location } = props
  const breadcrumbItem = location.pathname.split('/')
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {breadcrumbItem.map((item, index) => {
        return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>
      })}
    </Breadcrumb>
  )
}
export default withRouter(PublicBreadcrumb)