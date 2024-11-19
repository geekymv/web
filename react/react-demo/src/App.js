import React, {Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

class App extends Component {

  // 状态在哪里，操作状态的方法就在哪里
  state = {
    todos: [
      {id:'100', name:'吃饭', done:true},
      {id:'101', name:'睡觉', done:false},
      {id:'102', name:'打代码', done:false},
    ]
  }

  // 添加 todo
  addTodo = (todo)=> {
    console.log('App', todo)

    const {todos} = this.state
    const newTodos = [todo, ...todos]
    this.setState({
      todos: newTodos
    })
  }

  // 更新 todo
  updateTodo = (id, done) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      if (id === todo.id) {
        return {...todo, done: done}
      }
      return todo
    })
    this.setState({
      todos: newTodos
    })
  }

  // 删除todo
  deleteTodo = (id)=> {
    const {todos} = this.state
    const newTodos = todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }

  // 更新所有(选中所有、取消选中)
  updateAllTodo = (done) => {
    const {todos} = this.state
    const newTodos = todos.map(todo => {
      return {...todo, done : done}
    })
    this.setState({
      todos: newTodos
    })
  }

  // 清除已完成任务
  clearAllDone = () => {
    const {todos} = this.state
    const newTodos = todos.filter(todo => {
      return todo.done !== true
    })

    this.setState({
      todos: newTodos
    })
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo}/>
        <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
        <Footer todos={todos} updateAllTodo={this.updateAllTodo} clearAllDone={this.clearAllDone} />
      </div>
    )
  }
}

export default App