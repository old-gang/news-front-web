import React from 'react'
import { Route, Switch } from 'react-router-dom'

import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import Home from './Home'
import UserList from './RightManage/RightList'
import RoleList from './RightManage/RoleList'
export default function NewsSendBox() {
  return (
    <div>
      <SideMenu />
      <TopHeader />
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/user-manage/list" component={UserList}></Route>
        <Route path="/user-manage/role/list" component={RoleList}></Route>
      </Switch>
    </div>
  )
}
