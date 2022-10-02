import React, { useState } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './Home'
import NoPermission from './nopermission/NoPermission'
import UserList from './RightManage/RightList'
import RoleList from './RightManage/RoleList'

// antd
import { Layout, Menu } from 'antd'
// 样式
import './sendbox.css'

const { Content } = Layout

export default function NewsSendBox() {
  return (
    <Layout>
      {/* 侧边栏 */}
      <SideMenu />
      {/* 右侧 */}
      <Layout className="site-layout">
        {/* 右侧头部区域 */}
        <TopHeader />
        {/* 右侧内容区 */}
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Switch>
            <Route path="/home" component={Home}></Route>
            {/* 列表组件 */}
            <Route path="/user-manage/list" component={UserList}></Route>
            {/* 角色组件 */}
            <Route path="/user-manage/role/list" component={RoleList}></Route>
            {/* 重定向 */}
            <Redirect from="/" to="/home" exact></Redirect>
            <Route path="*" component={NoPermission}></Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}
