import React, { useState } from 'react'

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DownOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout, Dropdown, Menu, Space, Avatar } from 'antd'
const { Header } = Layout

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: 111,
      },
      {
        key: '4',
        danger: true,
        label: 'a danger item',
      },
    ]}
  />
)

export default function TopHeader() {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: '0 16px',
      }}
    >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: () => setCollapsed(!collapsed),
      })}
      <div style={{ float: 'right' }}>
        <span style={{ marginRight: '10px' }}>欢迎admin回来</span>

        {/* 右侧下拉框 */}
        <Dropdown overlay={menu} arrow={true}>
          <Space>
            <Avatar icon={<UserOutlined />} />
            <DownOutlined />
          </Space>
        </Dropdown>
      </div>
    </Header>
  )
}
