import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './Home'
import NoPermission from './nopermission/NoPermission'
import UserList from './RightManage/RightList'
import RoleList from './RightManage/RoleList'
export default function NewsSendBox() {
  return (
    <div>
      {/* 侧边栏 */}
      <SideMenu />
      <TopHeader />
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
    </div>
  )
}
