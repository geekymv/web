<template>
    <header class="header">
        <h2>小黑记事本</h2>
        <input v-model="todoName" @keyup.enter="handleAdd" type="text" placeholder="请输入任务" class="new-todo"/>
        <button @click="handleAdd" class="add">添加任务</button>
    </header>
</template>

<script>
    export default {
        name: "TodoHeader",
        data() {
            return {
                todoName: ''
            }
        },
        methods: {
            handleAdd: function () {
                if(this.todoName.trim() === '') {
                    alert('任务名称不能为空')
                    return
                }
                // console.log(this.todoName)
                // 将数据传递给父组件方法
                this.$emit('addTodo', this.todoName)
                this.todoName = ''
            }
        }
    }
</script>

<style scoped>

</style>