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

  render() {
    const {todos} = this.state;
    return (
      <div>
        <Header addTodo={this.addTodo}/>
        <List todos={todos} updateTodo={this.updateTodo}/>
        <Footer/>
      </div>
    )
  }
}

export default App