<template>
  <div id="app">
    <TodoHeader @addTodo="handleAddTodo"></TodoHeader>
    <TodoMain @delTodo="handleDelTodo" :list="list"></TodoMain>
    <TodoFooter @clearTodo="handleClearTodo" :list="list"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'

/**
 * 渲染功能
 * 1.提供数据 - 提供在公共的组件
 * 2.通过父传子，将数据传递给 TodoMain
 * 3.利用 v-for 渲染
 *
 * 添加功能
 * 1.收集表单数据 - v-model
 * 2.监听事件，回车和点击按钮都要进行添加
 * 3.子传父，将数据传递给父组件
 * 4.进行添加，list unshift 自己的数据自己负责
 *
 * 删除功能
 * 1.监听事件，携带ID
 * 2.子传父，将删除的ID传递给父组件
 * 3.父组件进行删除 list filter（自己的数据自己负责）
 *
 *
 */
export default {
  name: 'App',
  data() {
    return {
        list: [
            { id: 1, name: '打篮球'},
            { id: 2, name: '踢足球'},
            { id: 3, name: '打乒乓球'},
            { id: 4, name: '打羽毛球'},
        ]
    }
  },
  components: {
      TodoHeader,
      TodoMain,
      TodoFooter
  },
    methods: {
        handleAddTodo: function (todoName) {
            // console.log('handAddTodo', todoName)
            this.list.unshift({
                id: +new Date(),
                name: todoName
            })
        },
        handleDelTodo: function (id) {
            console.log('handleDelTodo ', id)
            this.list = this.list.filter(item => item.id !== id)
        },
        handleClearTodo: function () {
            this.list = []
        }
    }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
