<template>
    <div>
        <select :value="value" @change="handleSelectChange">
            <option value="101">北京</option>
            <option value="102">上海</option>
            <option value="103">广州</option>
        </select>
    </div>
    
</template>

<script>
    export default {
        props: {
            // 通过 value 接收数据
            value: String
        },
        methods: {
            // 切换城市，将 select 选中到值传递给父组件
            handleSelectChange: function (e) {
                // 通过 input 传递数据给父组件
                this.$emit('input', e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>