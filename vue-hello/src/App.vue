<template>
  <div id="app">
    <TodoHeader @addTodo="handleAddTodo"></TodoHeader>
    <TodoMain @delTodo="handleDelTodo" :list="list"></TodoMain>
    <TodoFooter @clearTodo="handleClearTodo" :list="list"></TodoFooter>
      <hr/>
      <BaseSelect @cityChange="handleCityChange" :cityId="cityId"></BaseSelect>
      <!-- v-model = :value 和 @input 组合-->
      <BaseSelectModel v-model="cityIdModel"></BaseSelectModel>
      <BaseInput v-model="name"></BaseInput>

      <div class="table-case">
        <MyTable :products="products">
            <template #thead>
                <th>编号</th>
                <th>图片</th>
                <th>名称</th>
                <th width="100px">标签</th>
            </template>
            <template #tbody="{item, index}">
                <td> {{ index + 1 }}</td>
                <td><img :src="item.picture" /></td>
                <td> {{ item.name }}</td>
                <td>
                    <MyTag v-model="item.tag"></MyTag>
                </td>
            </template>
        </MyTable>
      </div>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
import BaseSelect from './components/BaseSelect.vue'
import BaseSelectModel from './components/BaseSelectModel.vue'
import BaseInput from './components/BaseInput.vue'
import MyTag from './components/MyTag.vue'
import MyTable from './components/MyTable.vue'

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
        list: JSON.parse(localStorage.getItem('todoList')) || [
            { id: 1, name: '打篮球'},
            { id: 2, name: '踢足球'},
            { id: 3, name: '打乒乓球'},
            { id: 4, name: '打羽毛球'},
        ],
        products: [
            {id: 101, name: '商品1', picture: 'https://avatars.githubusercontent.com/u/4549602?v=4', tag: '孩童'},
            {id: 102, name: '商品2', picture: 'https://avatars.githubusercontent.com/u/4549602?v=4', tag: '老人'},
            {id: 103, name: '商品3', picture: 'https://avatars.githubusercontent.com/u/4549602?v=4', tag: '女士'},
        ],
        cityId: '102',
        cityIdModel: '103',
        name: 'tony',
    }
  },
  components: {
      TodoHeader,
      TodoMain,
      TodoFooter,
      BaseSelect,
      BaseSelectModel,
      BaseInput,
      MyTag,
      MyTable
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
        },
        // 子组件切换城市
        handleCityChange: function (cityId) {
            this.cityId = cityId
        }
    },
    watch: {
      // list 内容变化，存储到本地
      list: {
          deep: true,
          handler: function(newValue) {
              localStorage.setItem('todoList', JSON.stringify(newValue))
          }
      }
    }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
    .table-case {
        width: 1000px;
        margin: 50px auto;
        img {
            width: 100px;
            height: 100px;
            object-fit: contain;
            vertical-align: center;
        }
    }

</style>
