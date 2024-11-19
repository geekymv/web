### React 脚手架
#### 安装脚手架库
npm i create-react-app -g

#### 创建项目
create-react-app react-demo

public/index.html 主页面
src/App.js App组件
src/index.js 入口文件

#### 插件
ES7 React/Redux/GraphQL/React-Native sinppets 作者 dsznajder (搜索React)
创建类Component: rcc
创建函数式Component: rfc

### TODO 应用总结
- 父组件给子组件传递数据，通过props传递
- 子组件给父组件传递数据，通过props传递，要求父提前给子传递一个函数，由子组件调用
- 状态在哪里，操作状态的方法就在哪里。