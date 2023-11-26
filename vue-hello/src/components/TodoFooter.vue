<template>
    <footer class="footer">
        <span class="todo-count">合计：<strong> {{ list.length }} </strong></span>
        <button @click="clearTodo" class="clear-completed">清空任务</button>
    </footer>
    
</template>

<script>
    export default {
        name: "TodoFooter",
        props: {
            list: Array
        },
        methods: {
            clearTodo: function () {
                this.$emit('clearTodo')
            }
        }
    }
</script>

<style scoped>

</style>