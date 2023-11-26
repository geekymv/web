<template>
    <section class="main">
        <ul class="todo-list">
            <li v-for="(item, index) in list" :key="item.id" class="todo">
                <div>
                    <span class="index">{{ index+1 }}.</span> <label>{{ item.name }}</label>
                    <button @click="handleDel(item.id)" class="destroy">删除</button>
                </div>
            </li>

        </ul>
    </section>
</template>

<script>
    export default {
        name: "TodoMain",
        // props 接收父组件传递过来的数据
        props: {
            list: Array
        },
        methods: {
            handleDel: function (id) {
                console.log('handleDel ', id)
                this.$emit('delTodo', id)
            }
        }
    }
</script>

<style scoped>

</style>