import React from 'react'
import { Link } from 'react-router-dom'
import links from '../../../routers/menuConfig'
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const MenuItem = () => {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={['0']}
      style={{ lineHeight: '64px' }}
    >
      {links.map((link, index) => {
        return (
          <Menu.Item key={index}>
            <Link to={link.to}>{link.title}</Link>
          </Menu.Item>
        )
      })}
    </Menu>
  )
}
export default function MyHeader() {
  return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <MenuItem />
    </Header>
  )
}