<template>
    <div class="my-tag">
        <input v-if="isEdit" @keyup.enter="handleFinish" ref="tagName" :value="value" class="input" type="text" placeholder="输入标签" />
        <div @dblclick="handleClick" v-else class="text">{{ value }}</div>

    </div>
</template>

<script>
    export default {
        name: "MyTag",
        props: {
            value: String
        },
        data() {
            return {
                isEdit: false
            }
        },
        methods: {
            handleClick: function () {
                this.isEdit = true
                // 等DOM更新完了，再去获取焦点
                this.$nextTick(()=> {
                    this.$refs.tagName.focus()
                })
            },
            // 回车事件
            handleFinish: function (e) {
                if(e.target.value.trim() === '') {
                    alert('输入内容不能为空')
                    return
                }
                // 通过 input 传递数据给父组件
                this.$emit('input', e.target.value)
                this.isEdit = false
            }
        }
    }
</script>

<style lang="less" scoped>

    .my-tag {
        cursor: pointer;
        .input {
            appearance: none;
            outline: none;
            border: 1px solid #ccc;
            width: 100px;
            height: 40px;
            box-sizing: border-box;
            padding: 10px;
            color: #666;
            &::placeholder {
                color: #666;
            }

        }
    }

</style>