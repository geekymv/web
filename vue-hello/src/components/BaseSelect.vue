<template>
    <div>
        <select :value="cityId" @change="handleSelectChange">
            <option value="101">北京</option>
            <option value="102">上海</option>
            <option value="103">广州</option>
        </select>
    </div>
    
</template>

<script>
    export default {
        name: "base-select",
        props: {
            cityId: String
        },
        methods: {
            // 切换城市，将 select 选中到值传递给父组件
            handleSelectChange: function (e) {
                this.$emit('cityChange', e.target.value)
            }
        }
    }
</script>

<style scoped>

</style>