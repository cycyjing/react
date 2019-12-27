import React from 'react'
import { PublicBreadcrumb } from '../../../compoents'
import { Layout } from 'antd';
const { Content } = Layout;

export default function MyContent(props) {
  return (
    <Content style={{ padding: '0 50px', marginTop: 64 }}>
      <PublicBreadcrumb />
      <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>{props.children}</div>
    </Content>
  )
}