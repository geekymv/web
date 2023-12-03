<template>

    <input v-focus v-color="red" :value="value" @input="inputValueChange"/>
    
</template>

<script>
    export default {
        props: {
            value: String
        },
        methods: {
            inputValueChange: function (e) {
                this.$emit('input', e.target.value)
            }
        },
        data() {
            return {
                red: 'red'
            }
        },
        // 指令局部注册
        directives: {
            color: {
                // 元素被添加到页面中时
                inserted (el, binding) {
                    // 通过 binding.value 可以拿到指令的值
                    el.style.color = binding.value
                },
                // 指令值修改会触发 update 函数
                update (el, binding) {
                    el.style.color = binding.value
                }
            }
        }


    }
</script>

<style scoped>

</style>