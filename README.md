# 新闻发布管理系统

## 配置代理跨域

create-react-app 官网：https://create-react-app.bootcss.com/

方法一：

First, install `http-proxy-middleware` using npm or Yarn:

```sh
npm install http-proxy-middleware --save
# or
# yarn add http-proxy-middleware
```

Next, create `src/setupProxy.js` and place the following contents in it:

```js
const proxy = require('http-proxy-middleware');
module.exports = function(app) {  // ...};
```

You can now register proxies as you wish! Here's an example using the above `http-proxy-middleware`:

```js
const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://106.14.82.240:3000',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        '^/api': '/api',
      },
    })
  )
}
```

方法二：使用`craco`

> @craco/craco

## 使用`antd` 布局

Layout 组件布局

侧边栏如何展示二级菜单？
使用如下结构

```js
const list = [
  {
    key: '/home', //路径，用于跳转
    title: 'xxx', //用于显示标题
    icon: <zzxx />, //icon组件
    children: [{}, {}], //显示二级下拉框
  },
]
```
