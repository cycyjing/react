import React from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'

const { Header } = Layout;
const MyHeader = () => {
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/music">Music</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/movie">Movie</Link></Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}

export default MyHeader
