import React from 'react'
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom'
import Login from '../views/login'
import NewsSendBox from '../views/sendbox'
export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        {/* 登录路由 */}
        <Route path="/login" component={Login} />
        {/* 根路径 */}
        <Route
          path="/"
          render={() =>
            localStorage.getItem('token') ? (
              <NewsSendBox></NewsSendBox>
            ) : (
              <Redirect to="/login" />
            )
          }
        />
      </Switch>
    </HashRouter>
  )
}
