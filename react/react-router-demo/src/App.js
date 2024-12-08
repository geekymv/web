import React, { Component } from 'react'
// import {Link, Route} from 'react-router-dom'
import { NavLink, Route } from 'react-router-dom'

import About from './pages/About' // 路由组件
import Home from './pages/Home' // 路由组件
import Header from './components/Header' // 一般组件

import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div>
          {/* 
          <Link to="/about">About</Link>&nbsp;&nbsp;
          <Link to="/home">Home</Link> 
          */}
          <NavLink to="/about">About</NavLink>&nbsp;&nbsp;
          <NavLink to="/home">Home</NavLink> 
          {/* 
            NavLink 比 Link 多了默认样式 class="active"，也可以通过activeClassName指定样式名
            标签体内容是一个特殊的标签属性，通过 this.props.children 可以获取标签内内容。
          */}
        </div>
        <div>
          <Route path="/about" component= {About}/>
          <Route path="/home" component={Home}/>
        </div>        
      </div>

    )
  }
}
